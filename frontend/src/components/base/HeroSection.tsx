import React from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function HeroSection(){
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-4 font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">SimplyDone</h1>
            </div>

            <div>
                <Image src="/task_image.svg" width={500} height={500} alt="task_img"/>
            </div>
            <div className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Get going with <strong>SimplyDone.</strong> Create your first task now!</p>
                <Link href="/login">
                <Button className="mt-2 font-bold w-200">Start free</Button>
                </Link>
                
            </div>
        </div>
    )
}