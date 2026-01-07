import { body, validationResult } from 'express-validator'

export const registerValidator = [
    body('username').isString().isLength({ min: 3 }).withMessage('Username too short'), 
    body('password').isString().isLength({ min: 6 }).withMessage('Password too short'),
]; 

export const loginValidator = [
    body('username').notEmpty(), 
    body('password').notEmpty(),
]; 

export const validate = (req, res, next) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}; 

