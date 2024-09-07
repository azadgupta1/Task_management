import React from "react"
import { LabelHTMLAttributes } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function login(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] bg-white rounded-xl py-5 px-10 shadow-md">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">SimplyDone</h1>
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Welcome Back</p>

                <form >
                    <div className="mt-4">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" name="email" placeholder="Enter your email.."/>
                    </div>

                    <div className="mt-4">
                    <label htmlFor="email">Password</label>
                    <Input id="password" type="password" name="password" placeholder="Enter your password.."/>

                    <div className="text-right font-bold">
                    <Link href="forget-password">Forget password ?</Link>
                    </div>

                    </div>

                    <div className=" mt-4">
                        <Button className="w-full">Submit</Button>
                    </div>
                    
                </form>

                <p className="text-center mt-2">Don't have an account? <strong><Link href="/register">Register</Link></strong></p>
            </div>
        </div>
    )
}