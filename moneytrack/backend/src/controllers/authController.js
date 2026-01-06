import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../src/models/index.js'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'; 

export const register = async (req, res, next) => {
    try {
        const { username, password } = req.body
        // 1. Check trùng username 
        // 2. Hash password bằng bcrypt 
        // 3. Tạo user mới 
        // 4. Trả về thông tin cơ bản (ẩn password_hash)

    } catch (err){
        next(err);
    }
}; 

export const login = async (req, res, next) => {
    try {
        const {username, password} = req.body; 

        // 1. Tìm User theo username
        // 2. So sánh password với password_hash 
        // 3. Nếu đúng, tạo JWT (jwt.sign)
        // 4. Trả về token + info user 
    } catch (err) {
        next(err)
    }
}