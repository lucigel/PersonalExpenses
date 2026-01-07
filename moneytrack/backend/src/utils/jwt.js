import jwt from 'jsonwebtoken'

const  JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

const signToken = (payload, expiresIn='7d') => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}; 

const verifyToken = (token) => {    
    return jwt.verify(token, JWT_SECRET);

} ;

export { signToken, verifyToken }