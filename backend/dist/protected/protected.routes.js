import { Router } from 'express';
import { authenticateJWT } from '../middlewares/auth.middleware.js';
const router = Router();
// this is protected route
router.get('/profile', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});
export default router;
