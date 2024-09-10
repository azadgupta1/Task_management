import express, { Application, Request, Response, NextFunction } from 'express';
import "dotenv/config";
import authRoutes from './routes/auth.route.js';
import taskRoutes from './routes/tasks.route.js';
import protectedRoutes from './protected/protected.routes.js';

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Use your routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/protected', protectedRoutes);

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broken!');
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello its working ...");
});

app.listen(PORT, () => {
    console.log("Server is running on PORTs " + PORT + ".");
});




