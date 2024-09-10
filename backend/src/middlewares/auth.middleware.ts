import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Token:', token); // Add logging to check the token
    if (token) {
        jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
            if (err) {
                console.error('JWT Verification Error:', err); // Log verification error
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
