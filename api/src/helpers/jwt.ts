import jwt from "jsonwebtoken";
import * as jose from 'jose'
const secret = process.env.JWT_SECRET as jwt.Secret;

type Payload = {
    _id: string,
    name: string,
    email: string,
    password?: string,
    phone_number?: string,
    street_address?: string
}

export function createToken(payload: Payload):string {
    try {
        if(!secret) {
            throw { message: "No Secret For JWT" }
        }
        let result = jwt.sign(payload, secret);
        return result
    }
    catch(error) {
        throw error;
    }
}

export async function decodeToken<T>(token: string) {
    try {
        const secretKey = new TextEncoder().encode(`${secret}`);
    
        const { payload } = await jose.jwtVerify<T>(token, secretKey);

        return payload;
    }
    catch(error) {
        throw error;
    }
}