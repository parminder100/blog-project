"use client"
import { useRouter } from "next/navigation";

const BackButton = (props) =>{
    const router = useRouter();
    console.log("data from button component", props.test)
    return(
        <>
            <button onClick={()=>router.push("/")}>Back</button>
        </>
    )
}
export default BackButton;