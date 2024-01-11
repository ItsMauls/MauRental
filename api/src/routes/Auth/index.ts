import E from 'express'
import AuthController from '../../controllers/Auth/index'
const authRoutes = E.Router()

export default authRoutes
.post('/login', AuthController.userLogin)
.post('/register', AuthController.userRegister)