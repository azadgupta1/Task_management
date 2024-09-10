// import React, { useEffect, useState } from "react";
// import { getTasks, deleteTask } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// // Define a Task type
// type Task = {
//     id: number;
//     title: string;
//     description: string;
// };

// export default function TaskList() {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const [error, setError] = useState("");
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
//                 // Use the correct type for response data
//                 setTasks(response.data as Task[]);
//             } catch (error) {
//                 setError("Failed to fetch tasks.");
//             }
//         };

//         fetchTasks();
//     }, [router]);

//     return (
//         <div className="flex flex-col items-center h-screen">
//             <h1 className="text-3xl font-extrabold">Task List</h1>
//             {error && <p className="text-red-500">{error}</p>}
//             <div className="w-[500px]">
//                 <Button onClick={() => router.push('/tasks/create')}>Create New Task</Button>
//                 <ul className="mt-4">
//                     {tasks.map(task => (
//                         <li key={task.id} className="border-b py-2">
//                             <h2 className="text-xl">{task.title}</h2>
//                             <p>{task.description}</p>
//                             <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
//                             <Button onClick={async () => {
//                                 const token = localStorage.getItem("token");
//                                 if (token) {
//                                     try {
//                                         await deleteTask(task.id, token);
//                                         setTasks(tasks.filter(t => t.id !== task.id));
//                                     } catch (error) {
//                                         setError("Failed to delete task.");
//                                     }
//                                 }
//                             }}>Delete</Button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useState } from "react";
// import { getTasks, deleteTask } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// // Define a Task type
// type Task = {
//     id: number;
//     title: string;
//     description: string;
// };

// // Define the TasksResponse type according to your API response
// type TasksResponse = {
//     tasks: Task[];
//     // Include other fields if needed
// };

// export default function TaskList() {
//     const [tasks, setTasks] = useState<Task[]>([]);
//     const [error, setError] = useState("");
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
//                 // Access the tasks property if TasksResponse contains a tasks property
//                 setTasks((response.data as TasksResponse).tasks);
//             } catch (error) {
//                 setError("Failed to fetch tasks.");
//             }
//         };

//         fetchTasks();
//     }, [router]);

//     return (
//         <div className="flex flex-col items-center h-screen">
//             <h1 className="text-3xl font-extrabold">Task List</h1>
//             {error && <p className="text-red-500">{error}</p>}
//             <div className="w-[500px]">
//                 <Button onClick={() => router.push('/tasks/create')}>Create New Task</Button>
//                 <ul className="mt-4">
//                     {tasks.map(task => (
//                         <li key={task.id} className="border-b py-2">
//                             <h2 className="text-xl">{task.title}</h2>
//                             <p>{task.description}</p>
//                             <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
//                             <Button onClick={async () => {
//                                 const token = localStorage.getItem("token");
//                                 if (token) {
//                                     try {
//                                         await deleteTask(task.id, token);
//                                         setTasks(tasks.filter(t => t.id !== task.id));
//                                     } catch (error) {
//                                         setError("Failed to delete task.");
//                                     }
//                                 }
//                             }}>Delete</Button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Task, TasksResponse } from "@/lib/interfaces"; // Adjust path as needed

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
                // Cast the response data to TasksResponse
                const tasksData: TasksResponse = response.data;
                setTasks(tasksData.tasks);
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
                    {tasks.map(task => (
                        <li key={task.id} className="border-b py-2">
                            <h2 className="text-xl">{task.title}</h2>
                            <p>{task.description}</p>
                            <Button onClick={() => router.push(`/tasks/update/${task.id}`)}>Edit</Button>
                            <Button onClick={() => handleDelete(task.id)}>Delete</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
