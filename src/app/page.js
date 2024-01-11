"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (name) =>{
    router.push(name);
  }
  return (
    <>
      <main>
        <h1>Hello Parminder</h1>
        <Link href="/Login">Login</Link>
        <br />
        <br />
        <button onClick={()=>navigate("/Login")}>Login</button>
        <br />
        <br />
        <button onClick={()=>navigate("/ProductList")}>Go to ProductList</button>
        <br />
        <br />
        <button onClick={()=>navigate("/CommentsList")}>Go to CommentsList</button>
      </main>
    </>
  )
}
