import Link from "next/link";

const StudentList = () =>{
    const students = ['Rahul', 'Krishna', 'Shivansh', 'Vansh', 'Naksh', 'Kunal'];
    return(
        <>
            <h1>Student List</h1>
            <ul>
                {
                    students.map((student, index)=>(
                        <li key={index}>
                            <Link href={`/StudentList/${student}`}>{student}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default StudentList;