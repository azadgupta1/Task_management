// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// import axios from 'axios';
// import { AuthResponse, Task, TasksResponse } from './interfaces'; // Update path as needed

// // Existing utility function
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // API Utility Functions

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Update with your backend URL
// });

// export const registerUser = async (data: { email: string; password: string }) => {
//   return api.post<AuthResponse>('/auth/register', data); // Type the response
// };

// export const loginUser = async (data: { email: string; password: string }) => {
//   return api.post<AuthResponse>('/auth/login', data); // Type the response
// };

// export const getTasks = async (token: string) => {
//   return api.get<TasksResponse>('/tasks', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }); // Type the response
// };

// export const createTask = async (task: { title: string; description: string }, token: string) => {
//   return api.post<Task>('/tasks', task, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }); // Type the response
// };

// export const updateTask = async (id: number, task: { title: string; description: string }, token: string) => {
//   return api.put<Task>(`/tasks/${id}`, task, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }); // Type the response
// };

// export const deleteTask = async (id: number, token: string) => {
//   return api.delete(`/tasks/${id}`, {
//       headers: {
//           Authorization: `Bearer ${token}`,
//       },
//   });
// };


import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axios from 'axios';
import { AuthResponse, Task, TasksResponse } from './interfaces'; // Update the path as needed

// Existing utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// API Utility Functions

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
});

export const registerUser = async (data: { email: string; password: string }) => {
  return api.post<AuthResponse>('/auth/register', data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return api.post<AuthResponse>('/auth/login', data);
};

export const getTasks = async (token: string) => {
  return api.get<TasksResponse>('/tasks', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
