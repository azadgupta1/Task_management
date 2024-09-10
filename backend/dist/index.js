import express from 'express';
import cors from 'cors'; // Import the cors package
import "dotenv/config";
import authRoutes from './routes/auth.route.js';
import taskRoutes from './routes/tasks.route.js';
import protectedRoutes from './protected/protected.routes.js';
const app = express();
const PORT = process.env.PORT || 7000;
// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the URL of your frontend if it's different
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Use your routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/protected', protectedRoutes);
// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.get("/", (req, res) => {
    res.send("Hello, it's working ...");
});
app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT + ".");
});
