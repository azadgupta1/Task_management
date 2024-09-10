
"use client"; 

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { loginUser } from "@/lib/utils"; 

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            localStorage.setItem("token", response.data.token); 
            router.push("/tasks"); // Redirect to tasks page
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] bg-white rounded-xl py-5 px-10 shadow-md">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">SimplyDone</h1>
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Welcome Back</p>

                <form onSubmit={handleLogin}>
                    <div className="mt-4">
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="email" name="email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <Input id="password" type="password" name="password" placeholder="Enter your password.." value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <div className="text-right font-bold">
                            <Link href="/forget-password">Forget password?</Link>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                    <div className="mt-4">
                        <Button type="submit" className="w-full">Submit</Button>
                    </div>
                </form>

                <p className="text-center mt-2">Don't have an account? <strong><Link href="/register">Register</Link></strong></p>
            </div>
        </div>
    );
}
