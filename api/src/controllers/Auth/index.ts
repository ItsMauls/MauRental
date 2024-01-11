import { OtpCodes, Users } from "../../../config/db";
import { Request, Response } from "express";
import { comparePass, hashPass } from "../../../src/helpers/bcrypt";
import { schema } from "../../../src/helpers/joi";
import { User } from "../../../src/types/user";
import { LoginInput } from "../../../src/types/input";
import { createToken } from "../../../src/helpers/jwt";
import { LoginSuccess } from "../../../src/types/response";
import { sendEmail, transporter } from "../../../src/helpers/nodemailer";
import { htmlFormat } from "../../../src/helpers/htmlFormat";
import { otpGenerator } from "../../../src/helpers/htmlFormatForOtp";
import { sendOtpToPhoneNumber } from "../../../src/helpers/twilio";


export default class AuthController {
    static async userLogin(req : Request, res : Response) {
        try {
            const { email, password, phone_number }: LoginInput = req.body;

            // const validationResult = schema.validate({email, password, name})
            
            // if(validationResult.error) {
            //     throw {name: "InvalidInput", statusCode: 400, msg : validationResult.error.details[0].message}
            // }
            
            const user = await
              Users
              .findOne({ $or: [{ email }, { phone_number }] });

              const passwordValidation = comparePass(password, user.password);

              if (password && !passwordValidation) {
                throw { name: "InvalidLogin", statusCode: 400 };
              }
      
            let access_token: string;
      
              access_token = createToken({
                _id: String(user._id),
                name: user.name,
                email : user.email,
              
              });

              OtpCodes.createIndex({
                "createdAt" : 1 },
                {
                  expireAfterSeconds : 300
                })

                OtpCodes.insertOne({user : user._id, ...otpGenerator})
                
               await sendEmail(user.email)
              
               await sendOtpToPhoneNumber(user.phone_number, user.name)
            
              return res.status(200).json({
                statusCode: 200,
                message: "User logged in successfully",
                data: {
                  access_token: access_token,
                  email: user.email,
                },
              } as LoginSuccess);
            
          } catch (error) {
            console.log(error);
            res
            .status(400)
            .json({err : error.message})
            // next(error);
          }
    }

    static async userRegister(req : Request, res : Response) {
        const {email, name, password, phone_number, street_address} : User = req.body

        const validationResult = schema.validate({email, password, name})
            
            if(validationResult.error) {
                throw new Error(validationResult.error.details[0].message)
            }

            const hashedPassword = hashPass(password);
            const newUser = {
                email,
                password: hashedPassword,
                name,
                phone_number,
                street_address
            }
            try {
                const existingPhoneNum = await Users.findOne({phone_number})
                const existingEmail = await Users.findOne({email})
               
                if(existingPhoneNum) {
                    throw new Error('Phone Number already exists')
                }
                if(existingEmail) {
                    throw new Error('Email already exists')
                }
                const result = await 
                Users
                .insertOne(newUser);
                
                const User = {_id : result.insertedId, ...newUser}

                await transporter.sendMail({
                  from: 'maurental@business.com',
                  to: User.email,
                  subject: `Welcome Our Priority Customer`,
                  html : htmlFormat(User.name)
                 })

                 await sendOtpToPhoneNumber(User.phone_number, User.name)
                
                res
                .status(201)
                .json(User)
            } catch (error) {
                console.log(error.message)
                throw new Error('Failed to save user');
            }
        }
    }
