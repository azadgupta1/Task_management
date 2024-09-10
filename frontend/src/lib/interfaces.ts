// src/lib/interfaces.ts

export interface AuthResponse {
    token: string;
  }
  
export interface Task {
    id: number;
    title: string;
    description: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
  }
  
export interface TasksResponse {
    tasks: Task[];
  }
  