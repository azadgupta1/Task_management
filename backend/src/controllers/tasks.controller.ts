// import { Request, Response } from 'express';
// import prisma from '../config/database.js';

// // Create Task
// export const createTask = async (req: Request, res: Response) => {
//   const { title, description, userId } = req.body;
//   try {
//     const task = await prisma.task.create({
//       data: { title, description, userId },
//     });
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create task' });
//   }
// };

// // Get Tasks
// export const getTasks = async (req: Request, res: Response) => {
//   try {
//     const tasks = await prisma.task.findMany();
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to get tasks' });
//   }
// };

// 

import { Request, Response } from 'express';
import prisma from '../config/database.js';

// Create Task
export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const userId = req.user?.id; // Use `id` from the user

    if (!userId) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const task = await prisma.task.create({
            data: { title, description, userId },
        });
        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};

// Get Tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                userId: req.user?.id, // Use `id` from the user
            },
        });
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: 'Failed to get tasks' });
    }
};
