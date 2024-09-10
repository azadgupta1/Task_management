// import React from "react"
// import { LabelHTMLAttributes } from "react"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";


// export default function register(){
//     return(
//         <div className="flex justify-center items-center h-screen">
//             <div className="w-[500px] bg-white rounded-xl py-5 px-10 shadow-md">
//                 <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">SimplyDone</h1>
//                 <h1 className="text-2xl font-bold">Login</h1>
//                 <p>Welcome Back</p>

//                 <form >

//                     <div className="mt-4">
//                     <label htmlFor="email">Name</label>
//                     <Input id="email" type="name" name="name" placeholder="Enter your name.."/>
//                     </div>

//                     <div className="mt-4">
//                     <label htmlFor="email">Email</label>
//                     <Input id="email" type="email" name="email" placeholder="Enter your email.."/>
//                     </div>

//                     <div className="mt-4">
//                     <label htmlFor="email">Password</label>
//                     <Input id="password" type="password" name="password" placeholder="Enter your password.."/>
//                     </div>

//                     <div className="mt-4">
//                     <label htmlFor="email" className="mt-4">Confirm Password</label>
//                     <Input id="password" type="password" name="password" placeholder="Confirm your password.."/>

//                     <div className="text-right font-bold">
//                     <Link href="forget-password">Forget password ?</Link>
//                     </div>

//                     </div>

//                     <div className=" mt-4">
//                         <Button className="w-full">Submit</Button>
//                     </div>
                    
//                 </form>

//                 <p className="text-center mt-2">Already have an account? <strong><Link href="/login">Login</Link></strong></p>
//             </div>
//         </div>
//     )
// }

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Ensure this import is present

import { useRouter } from "next/navigation"; // Change this import
import { registerUser } from "@/lib/utils"; // Import the register function

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await registerUser({ email, password });
            setSuccess("Registration successful!");
            setError("");
        } catch (error) {
            setError("Registration failed. Please try again.");
            setSuccess("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] bg-white rounded-xl py-5 px-10 shadow-md">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">SimplyDone</h1>
                <h1 className="text-2xl font-bold">Register</h1>
                <p>Create a new account</p>

                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <div className="mt-4">
                        <label htmlFor="name">Name</label>
                        <Input id="name" type="text" name="name" placeholder="Enter your name.." value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="email" name="email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <Input id="password" type="password" name="password" placeholder="Enter your password.." value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="confirm-password" className="mt-4">Confirm Password</label>
                        <Input id="confirm-password" type="password" name="confirmPassword" placeholder="Confirm your password.." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className="mt-4">
                        <Button type="submit" className="w-full">Register</Button>
                    </div>
                </form>

                <p className="text-center mt-2">Already have an account? <strong><Link href="/login">Login</Link></strong></p>
            </div>
        </div>
    );
}
