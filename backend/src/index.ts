import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors'; 
import "dotenv/config";
import authRoutes from './routes/auth.route.js';
import taskRoutes from './routes/tasks.route.js';
import protectedRoutes from './protected/protected.routes.js';

const app: Application = express();
const PORT = process.env.PORT || 7000;

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); 

// Usint the  routes here..
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/protected', protectedRoutes);

// handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, it's working ...");
});

app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT + ".");
});
