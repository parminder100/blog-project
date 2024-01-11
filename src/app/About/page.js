"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () =>{
    const router = useRouter();
    return(
        <>
            <h1>About Page</h1>
            <Link href="/">Back</Link>
            <br />
            <br />
            <button onClick={()=>router.push("/")}>Back</button>
        </>
    )
}
export default About;