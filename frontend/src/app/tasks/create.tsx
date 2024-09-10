import React, { useState } from "react";
import { createTask } from "@/lib/utils";
import { Button, Input } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function CreateTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found.");
            return;
        }

        try {
            await createTask({ title, description }, token);
            setSuccess("Task created successfully!");
            setError("");
            router.push('/tasks');
        } catch (error) {
            setError("Failed to create task.");
            setSuccess("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] bg-white rounded-xl py-5 px-10 shadow-md">
                <h1 className="text-3xl font-extrabold">Create Task</h1>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label htmlFor="title">Title</label>
                        <Input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="description">Description</label>
                        <Input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <Button type="submit" className="w-full">Create</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
