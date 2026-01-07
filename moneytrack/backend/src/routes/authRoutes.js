import { Router } from "express";
import { register, login } from '../controllers/authController.js';
import { registerValidator, loginValidator, validate } from '../validators/authValidator.js'

const router = Router(); 

router.post('/register', registerValidator, validate, register);
router.post('/login', loginValidator, validate, login);

export default router