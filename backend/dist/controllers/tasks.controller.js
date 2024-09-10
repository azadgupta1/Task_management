import prisma from '../config/database.js';
// Create Tasks
export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user?.id; // Use id by the userr
    if (!userId) {
        return res.status(401).json({ error: 'User not authenticated' });
    }
    try {
        const task = await prisma.task.create({
            data: {
                title,
                description,
                userId,
            },
        });
        res.status(201).json(task);
    }
    catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};
// Get Tasks
export const getTasks = async (req, res) => {
    const userId = req.user?.id; // Using the id here
    if (!userId) {
        return res.status(401).json({ error: 'User not authenticated' });
    }
    try {
        const tasks = await prisma.task.findMany({
            where: {
                userId: userId,
            },
        });
        res.json(tasks);
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: 'Failed to get tasks' });
    }
};
