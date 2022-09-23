import axios, {AxiosError} from "axios";
import {useEffect, useState} from "react";
// @ts-ignore
import {IProduct} from "../components/model";


export function useProducts(){
    const [error,SetError]=useState('')
    const [loading, SetLoading]
        =useState(false)
    const [products, SetProducts]= useState<IProduct[]>([])
    async function fatchProducts(){
        try {
            SetError('')
            SetLoading(true)
            const responce =await axios.get<IProduct[]>("https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid")
            // https://fakestoreapi.com/products?limit=90
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
    return {products,loading,error}
}


