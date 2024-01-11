const GetPrice = (props) =>{
    return(
        <>
            <button onClick={()=>alert(props.price)}>Get price</button>
        </>
    )
}
export default GetPrice;