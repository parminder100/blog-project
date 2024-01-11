"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import GetPrice from "../GetPrice/page";
import { useRouter } from "next/navigation";

const ProductList = () =>{
    const [product, setProduct] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        const getProductList = async() =>{
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            console.log(data.products);
            setProduct(data.products);
        }
        getProductList();
    },[]);

    const navigate = () =>{
        router.push("/");
    }
    return(
        <>
            <button onClick={navigate}>Back</button>
            <h1>Product List Client Side</h1>
            <table>
                <thead>
                    <tr>
                        <td>Sr No.</td>
                        <td>Thumbnail</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item, index)=>(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>
                                    <Image src={item.thumbnail} width={0} height={0} style={{width: "100px", height: "auto"}} alt={item.title}/>
                                </td>
                                <td>{item.title}</td>
                                <td>
                                    <GetPrice price={item.price} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default ProductList;