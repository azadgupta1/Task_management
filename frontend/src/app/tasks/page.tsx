// "use client";

// import React, { useEffect, useState } from "react";
// import { getTasks, deleteTask } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { Task, TasksResponse } from "@/lib/interfaces";

// export default function TaskList() {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const [error, setError] = useState<string>("");
//     const router = useRouter();

//     useEffect(() => {
//         const fetchTasks = async () => {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 setError("No token found.");
//                 return;
//             }

//             try {
//                 const response = await getTasks(token);
//                 const tasksData: TasksResponse = response.data;
//                 setTasks(tasksData.tasks || []);
//             } catch (error) {
//                 setError("Failed to fetch tasks.");
//                 console.error("Error fetching tasks:", error);
//             }
//         };

//         fetchTasks();
//     }, [router]);

//     const handleDelete = async (taskId: number) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             try {
//                 await deleteTask(taskId, token);
//                 setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
//             } catch (error) {
//                 setError("Failed to delete task.");
//                 console.error("Error deleting task:", error);
//             }
//         }
//     };

//     return (
//         <div className="flex flex-col items-center h-screen">
//             <h1 className="text-3xl font-extrabold">Task List</h1>
//             {error && <p className="text-red-500">{error}</p>}
//             <div className="w-[500px]">
//                 <Button onClick={() => router.push('/tasks/create')}>Create New Task</Button>
//                 <ul className="mt-4">
//                     {tasks && tasks.length > 0 ? (
//                         tasks.map(task => (
//                             <li key={task.id} className="border-b py-2">
//                                 <h2 className="text-xl">{task.title}</h2>
//                                 <p>{task.description}</p>
//                                 <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
//                                 <Button onClick={() => handleDelete(task.id)}>Delete</Button>
//                             </li>
//                         ))
//                     ) : (
//                         <p>No tasks available</p>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { getTasks, deleteTask } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { Task, TasksResponse } from "@/lib/interfaces";

// export default function TaskList() {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const [error, setError] = useState<string>("");
//     const router = useRouter();

//     useEffect(() => {
//         const fetchTasks = async () => {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 setError("No token found.");
//                 return;
//             }

//             try {
//                 const response = await getTasks(token);
//                 console.log("Tasks response: ", response.data); // Logging response to debug
//                 const tasksData: TasksResponse = response.data;
//                 setTasks(tasksData.tasks || []); // Ensure task is an empty array if not found
//             } catch (error) {
//                 setError("Failed to fetch tasks.");
//                 console.error("Error fetching tasks:", error);
//             }
//         };

//         fetchTasks();
//     }, [router]);

//     const handleDelete = async (taskId: number) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             try {
//                 await deleteTask(taskId, token);
//                 setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId)); // Remove the task from the list
//             } catch (error) {
//                 setError("Failed to delete task.");
//                 console.error("Error deleting task:", error);
//             }
//         }
//     };

//     return (
//         <div className="flex flex-col items-center h-screen">
//             <h1 className="text-3xl font-extrabold mb-4">Task List</h1>

//             {error && <p className="text-red-500">{error}</p>}

//             <Button className="mb-4" onClick={() => router.push('/tasks/create')}>
//                 Create New Task
//             </Button>

//             <div className="w-[500px]">
//                 <ul className="mt-4">
//                     {tasks && tasks.length > 0 ? (
//                         tasks.map(task => (
//                             <li key={task.id} className="border-b py-2">
//                                 <h2 className="text-xl">{task.title}</h2>
//                                 <p>{task.description}</p>
//                                 <div className="flex space-x-2">
//                                     <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
//                                     <Button variant="destructive" onClick={() => handleDelete(task.id)}>Delete</Button>
//                                 </div>
//                             </li>
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-500">No tasks available</p>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }

"use client";

import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Task } from "@/lib/interfaces";

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("No token found.");
                return;
            }

            try {
                const response = await getTasks(token);
                console.log("Tasks response data: ", response.data);
                setTasks(response.data); // Set state with the correct data
            } catch (error) {
                setError("Failed to fetch tasks.");
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [router]);

    const handleDelete = async (taskId: number) => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                await deleteTask(taskId, token);
                setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
            } catch (error) {
                setError("Failed to delete task.");
                console.error("Error deleting task:", error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center h-screen">
            <h1 className="text-3xl font-extrabold">Task List</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-[500px]">
                <Button onClick={() => router.push('/tasks/create')}>Create New Task</Button>
                <ul className="mt-4">
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <li key={task.id} className="border-b py-2">
                                <h2 className="text-xl">{task.title}</h2>
                                <p>{task.description}</p>
                                <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
                                <Button onClick={() => handleDelete(task.id)}>Delete</Button>
                            </li>
                        ))
                    ) : (
                        <p>No tasks available</p>
                    )}
                </ul>
            </div>
        </div>
    );
}


// "use client";

// import React, { useEffect, useState } from "react";
// import { getTasks, deleteTask } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { Task, TasksResponse } from "@/lib/interfaces";

// export default function TaskList() {
//     const [tasks, setTasks] = useState<Task[]>([]); // Initialize tasks as an empty array
//     const [error, setError] = useState<string>("");
//     const router = useRouter();

//     useEffect(() => {
//         const fetchTasks = async () => {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 setError("No token found.");
//                 return;
//             }

//             try {
//                 const response = await getTasks(token);
//                 console.log("Full response data: ", response.data);
                
//                 if (response.data && Array.isArray(response.data.tasks)) {
//                     setTasks(response.data.tasks); // Ensure tasks is an array
//                 } else {
//                     setError("Unexpected response format.");
//                 }
//             } catch (error) {
//                 setError("Failed to fetch tasks.");
//                 console.error("Error fetching tasks:", error);
//             }
//         };

//         fetchTasks();
//     }, [router]);

//     const handleDelete = async (taskId: number) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             try {
//                 await deleteTask(taskId, token);
//                 setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
//             } catch (error) {
//                 setError("Failed to delete task.");
//                 console.error("Error deleting task:", error);
//             }
//         }
//     };

//     return (
//         <div className="flex flex-col items-center h-screen">
//             <h1 className="text-3xl font-extrabold">Task List</h1>
//             {error && <p className="text-red-500">{error}</p>}
//             <div className="w-[500px]">
//                 <Button onClick={() => router.push('/tasks/create')}>Create New Task</Button>
//                 <ul className="mt-4">
//                     {tasks && tasks.length > 0 ? ( // Add a check to ensure tasks is defined
//                         tasks.map(task => (
//                             <li key={task.id} className="border-b py-2">
//                                 <h2 className="text-xl">{task.title}</h2>
//                                 <p>{task.description}</p>
//                                 <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
//                                 <Button onClick={() => handleDelete(task.id)}>Delete</Button>
//                             </li>
//                         ))
//                     ) : (
//                         <p>No tasks available</p>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }
