const Lecture = ({params}) =>{
    return(
        <>
            {
                params.lecture.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </>
    )
}
export default Lecture;