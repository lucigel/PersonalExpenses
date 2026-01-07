import { verifyToken } from "../utils/jwt.js";

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || ''; 

        const token = authHeader.startsWith('Bearer ')
            ? authHeader.slice(7)
            : null;
        
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = verifyToken(token)

        req.user = { id: decoded.userId }; 
        
        return next()

    } catch (err) {
        
        return res.status(401).json({ message: 'Unauthorized' })
    }
};

export default auth 