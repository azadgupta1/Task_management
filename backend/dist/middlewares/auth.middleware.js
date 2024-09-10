import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
export const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Token:', token); // Log the token received in the request
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                console.error('JWT Verification Error:', err); // Log the verification error
                return res.sendStatus(403);
            }
            console.log('Verified User:', user); // Log the verified user details
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
