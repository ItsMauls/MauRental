import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";
import Auth from "./routes/Auth";

dotenv.config();

const app: Express = express();
app.use(json())
app.use(express.urlencoded({extended : true}))

app.use(Auth)



export default app