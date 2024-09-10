import { Router } from 'express';
import { createTask, getTasks } from './tasks.controller.js';
import { authenticateJWT } from '../middlewares/auth.middleware.js';
const router = Router();
router.post('/', authenticateJWT, createTask); // Protect this route
router.get('/', authenticateJWT, getTasks); // Protect this route
export default router;
