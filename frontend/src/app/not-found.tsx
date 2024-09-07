import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function CustomNotfound(){
    return(
        <div className="h-screen flex justify-center items-center flex-col">
            <Image src="/404_image.svg" width={500} height={500} alt="404_image"/>
            <Link href="/">
            <Button>Return Home</Button>
            </Link>
        </div>
    )
}