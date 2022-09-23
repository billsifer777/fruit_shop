import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
// @ts-ignore
import s from './Cart_product.module.scss';
import {Header_buy} from "../../components/header_buy/Header_buy";

import {IProduct} from "../../components/model";
import axios from "axios";
import {useSelector} from "react-redux";

interface Props{
    product:IProduct
}

export const Cart =()=>{
    const [loading, SetLoading]=useState(false)
    const [product, SetProducts] = useState<IProduct[]>([])
    // @ts-ignore
    const {price} = product;
    // @ts-ignore
    const {Id} = useParams

    // @ts-ignore
    const pcs=useSelector(state => state.pcs)

    async function fatchProducts() {
        const responce = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/${Id}`)
        SetProducts(responce.data)
        SetLoading(true)
    }
    useEffect(() => {fatchProducts()}, [])

    let page

    if(loading){
        page=<div className={s.buy_product} >
            <div className={s.change}>
                <div className={s.wrapper}>
                    hghjghjghj
                    {price}
                </div>
            </div>
        </div>
    }
    else{
        <div>loaded...</div>
    }

    return(
        <>
            <Header_buy name={'Cart'}></Header_buy>
            <div>{page}</div>
        </>
    )
}