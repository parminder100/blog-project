const Student = ({params}) =>{
    return(
        <>
            <h1>Student Details</h1>
            <h4>{params.student}</h4>
        </>
    )
}
export default Student;