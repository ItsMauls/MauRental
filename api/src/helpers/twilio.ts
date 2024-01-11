import { otpGenerator } from "./htmlFormatForOtp";

const accountSid = process.env.TWILIO_ACCOUNTS_ID;
const authToken = process.env.TWILIO_AUTH;

const client = require('twilio')(accountSid, authToken);

export const sendOtpToPhoneNumber = async(recipientNum : string | number, name : string) => {
    console.log(recipientNum);
    
    const message = await client.messages
      .create({
        body: `Halo ${name}, kode OTP kamu ${otpGenerator.otp}`,
        to: recipientNum, // Text your number
        from: '+19283251204', // From a valid Twilio number
      })
      console.log(message.sid)
}