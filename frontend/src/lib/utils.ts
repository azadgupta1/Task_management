

// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// import axios from 'axios';
// import { AuthResponse, Task, TasksResponse } from './interfaces'; // Update the path as needed

// // Existing utility function
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // API Utility Functions

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Update with your backend URL
// });

// export const registerUser = async (data: { email: string; password: string }) => {
//   return api.post<AuthResponse>('/auth/register', data);
// };

// export const loginUser = async (data: { email: string; password: string }) => {
//   return api.post<AuthResponse>('/auth/login', data);
// };

// export const getTasks = async (token: string) => {
//   return api.get<TasksResponse>('/tasks', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const createTask = async (task: { title: string; description: string }, token: string) => {
//   return api.post<Task>('/tasks', task, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const updateTask = async (id: number, task: { title: string; description: string }, token: string) => {
//   return api.put<Task>(`/tasks/${id}`, task, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const deleteTask = async (id: number, token: string) => {
//   return api.delete(`/tasks/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// import axios from 'axios';
// import { AuthResponse, Task, TasksResponse } from './interfaces'; // Update the path as needed

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Update with your backend URL
// });

// export const getTasks = async (token: string) => {
//   try {
//     const response = await api.get<TasksResponse>('/tasks', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("Full response from getTasks: ", response);
//     return response;
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     throw error; // Rethrow to handle in component
//   }
// };

// export const registerUser = async (data: { email: string; password: string }) => {
//   return api.post<AuthResponse>('/auth/register', data);
// };

// export const loginUser = async (data: { email: string; password: string }) => {
//   return api.post<AuthResponse>('/auth/login', data);
// };



// export const createTask = async (task: { title: string; description: string }, token: string) => {
//   return api.post<Task>('/tasks', task, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const updateTask = async (id: number, task: { title: string; description: string }, token: string) => {
//   return api.put<Task>(`/tasks/${id}`, task, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const deleteTask = async (id: number, token: string) => {
//   return api.delete(`/tasks/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// // Utility function (no changes needed)
// export function cn(...classes: (string | undefined | false)[]): string {
//   return classes.filter(Boolean).join(' ');
// }

import axios from 'axios';
import { AuthResponse, Task, TasksResponse } from './interfaces'; // Update the path as needed

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
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
    throw error; // Rethrow to handle in component
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

// Utility function (no changes needed)
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
