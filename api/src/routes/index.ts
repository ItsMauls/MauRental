import express from 'express'
import authRoutes from '../routes/Auth/index'

export const router = express()
.use(authRoutes)


