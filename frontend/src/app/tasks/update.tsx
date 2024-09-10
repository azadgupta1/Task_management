import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTasks, updateTask } from '@/lib/utils'; // Adjust path as needed
import { Task } from '@/lib/interfaces'; // Adjust path as needed

const UpdateTaskPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await getTasks(token as string);
        const foundTask = response.data.tasks.find((task) => task.id === Number(id));
        setTask(foundTask || null);
        if (foundTask) {
          setTitle(foundTask.title);
          setDescription(foundTask.description);
        }
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };

    if (id) {
      fetchTask();
    }
  }, [id, token]);

  const handleUpdate = async () => {
    if (task && token) {
      await updateTask(task.id, { title, description }, token);
      router.push('/tasks');
    }
  };

  return (
    <div>
      <h1>Update Task</h1>
      {task ? (
        <form onSubmit={e => { e.preventDefault(); handleUpdate(); }}>
          <div>
            <label>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <button type="submit">Update Task</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateTaskPage;
