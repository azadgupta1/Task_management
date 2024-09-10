// import { Request, Response } from 'express';
// import prisma from '../config/database.js';
import prisma from '../config/database.js'; // Ensure this path is correct
// Create Task
export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user?.id; // Use `id` from the user
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
    const userId = req.user?.id; // Use `id` from the user
    if (!userId) {
        return res.status(401).json({ error: 'User not authenticated' });
    }
    try {
        const tasks = await prisma.task.findMany({
            where: {
                userId: userId,
            },
        });
        res.json(tasks); // Ensure this returns an array of tasks
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: 'Failed to get tasks' });
    }
};
