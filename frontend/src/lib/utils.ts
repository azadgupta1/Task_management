
import axios from 'axios';
import { AuthResponse, Task, TasksResponse } from './interfaces'; 
const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getTasks = async (token: string) => {
  try {
    const response = await api.get<TasksResponse>('/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Full response from getTasks: ", response);
    return response;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; 
  }
};

export const registerUser = async (data: { email: string; password: string }) => {
  return api.post<AuthResponse>('/auth/register', data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return api.post<AuthResponse>('/auth/login', data);
};

export const createTask = async (task: { title: string; description: string }, token: string) => {
  return api.post<Task>('/tasks', task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTask = async (id: number, task: { title: string; description: string }, token: string) => {
  return api.put<Task>(`/tasks/${id}`, task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteTask = async (id: number, token: string) => {
  return api.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// utility function 
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
