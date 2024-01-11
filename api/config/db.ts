import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGODB_URI;

if (!uri) throw Error("invalid URI!");

const client = new MongoClient(uri);

const db = client.db('MauRentalDB')

export const Users = db.collection('Users')
export const Vehicles = db.collection('Vehicles')
export const Bookings = db.collection('Bookings')
export const Memberships = db.collection('Memberships')
export const OtpCodes = db.collection('OTP_Codes')
