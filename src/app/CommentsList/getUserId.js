"use client"

const GetUserId = (props) =>{
    return(
        <>
            <button onClick={()=>alert(props.id)}>Get User Id</button>
        </>
    )
}
export default GetUserId;