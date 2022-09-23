import axios, {AxiosError} from "axios";
import {useEffect, useState} from "react";
// @ts-ignore
import {IProduct} from "../components/model";
interface Props{
    Id:number
}
export function useProduct({Id}:Props){
    const [error,SetError]=useState('')
    const [loading, SetLoading]
        =useState(false)
    const [product, SetProducts]= useState<IProduct[]>([])
    async function fatchProducts(){
        try {
            SetError('')
            SetLoading(true)
            const responce = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/${Id}`)
            SetProducts(responce.data)
            SetLoading(false)
        }
        catch (e:unknown){
            const error=e as AxiosError
            SetLoading(false)
            SetError(error.message)
        }
    }
    useEffect(()=>{fatchProducts()}, [])
    return {product,loading,error}
}


