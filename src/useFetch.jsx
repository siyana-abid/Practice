import { useState,useEffect} from "react";
import axios from 'axios'

function useFetch(url){
    const[products,setProducts]=useState([])
useEffect(()=>{

    axios.get(url)
    .then((res)=>{
        setProducts(res.data.products)
    })
},[url])

return products;
}
export default useFetch ;