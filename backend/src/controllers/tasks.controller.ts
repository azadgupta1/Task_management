import { Request, Response } from 'express';
import prisma from '../config/database.js';

// Create Task
export const createTask = async (req: Request, res: Response) => {
  const { title, description, userId } = req.body;
  try {
    const task = await prisma.task.create({
      data: { title, description, userId },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Get Tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get tasks' });
  }
};
