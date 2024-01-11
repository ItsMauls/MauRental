import { ObjectId } from "mongodb";

export interface User {
    _id : ObjectId
    name : string
    email : string
    password? : string
    phone_number? : string
    street_address? : string
}

