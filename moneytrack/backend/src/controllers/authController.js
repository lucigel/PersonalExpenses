import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../src/models/index.js'
import { where } from 'sequelize';
import { signToken } from '../utils/jwt.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'; 

export const register = async (req, res, next) => {
    try {
        const { username, password } = req.body

        const existing_user = await User.findOne({ where: {username} });
        if (existing_user) return res.status(400).json({ message: 'Username already exists' });
      
        const hashed = await bcrypt.hash(password, 10);
    
        const new_user = await User.create({ username, password_hash: hashed})
      
        return res.status(201).json({
            user: { id: new_user.id, username: new_user.username },
          });
    } catch (err){
        next(err);
    }
}; 

export const login = async (req, res, next) => {
    try {
        const {username, password} = req.body; 

        const user = await User.findOne({ where: { username }})

        if(!user) return res.status(400).json({ message: 'Invalid credentials'})

        const ok = await bcrypt.compare(password, user.password_hash)

        if(!ok) return res.status(400).json({ message: 'Invalid credentials' })
            
        const token = signToken({ userId: user.id })
        
        return res.json({
            token, 
            user: { id: user.id, username: user.username }
        })
    } catch (err) {
        next(err)
    }
}