
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Token:', token); 
    if (token) {
        jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
            if (err) {
                console.error('JWT Verification Error:', err); // Log verification errro
                return res.sendStatus(403);
            }
            console.log('Verified User:', user); 
            req.user = { id: user.userId }; // Attach user ID to request
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
