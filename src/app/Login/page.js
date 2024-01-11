"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () =>{
    const router = useRouter();
    return(
        <>
            <h1>Login Page</h1>
            <Link href="/">Back</Link>
            <br />
            <br />
            <button onClick={()=>router.push("/")}>Back</button>
        </>
    )
}
export default Login;