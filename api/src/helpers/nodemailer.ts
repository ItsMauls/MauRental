import {createTransport} from 'nodemailer'
import { htmlFormatForOTP } from './htmlFormatForOtp';

export const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.DEV_EMAIL,
        pass: process.env.DEV_PASS,
    },
  });

export const sendEmail = async(userMail) => {
    await transporter.sendMail({
        from: 'maurental@business.com',
        to: userMail,
        subject: `MauRental OTP Code`,
        html : htmlFormatForOTP(userMail)
       })
}