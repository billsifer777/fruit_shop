import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
// @ts-ignore
import s from './Buy_product.module.scss';
import {Header_buy} from "../../components/header_buy/Header_buy";

import {IProduct} from "../../components/model";
import axios from "axios";
import {ButtonPcsSvgSelector} from "../../assets/ButtonPcsSvgSelector";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useProduct} from "../../hooks/one_product";
import {useProducts} from "../../hooks/products";

interface Props{
    product:IProduct
}
// {product}:Props
export const Buy_product =()=>{
    const dispatch=useDispatch()
// @ts-ignore
    const pcs=useSelector(state => state.pcs)

    const [product, SetProducts] = useState<IProduct[]>([])

    const [loading, SetLoading]=useState(false)
    const {Id} = useParams()

    async function fatchProducts() {
        const responce = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/${Id}`)
        SetProducts(responce.data)
        SetLoading(true)
    }
    useEffect(() => {fatchProducts()}, [])
    // @ts-ignore
    const {price,image,id} = product<IProduct[]>;



    const minus_kg=()=>{
        if(pcs>1){
            // SetPcs(pcs-1)
            dispatch({type:"remote",payload: 1})
        }
    }
    const plus_kg=()=>{
        dispatch({type:"add",payload: 1})
        if(pcs==1){
            console.log(pcs)
        }
        // SetPcs(pcs+1)
        }
    let page

    if(loading){
        page=<div className={s.buy_product} >
            <div className={s.card}>
                <img className={s.image} src={image}/>
            </div>

            <div className={s.button_kg}>
                <button className={s.button_kg_minus} onClick={minus_kg}>
                    <ButtonPcsSvgSelector id={'minus'}></ButtonPcsSvgSelector>
                </button>
                {pcs} pcs
                <button className={s.button_kg_plus} onClick={plus_kg}>
                    <ButtonPcsSvgSelector id={'plus'}></ButtonPcsSvgSelector>
                </button>
            </div>
            <div className={s.price}>${(price*pcs).toFixed(1)}</div>
            <Link to={`/cart/${id}`}><div className={s.button_add_card}>Add to Cart</div></Link>
        </div>
    }
    else{
        <div>loaded...</div>
    }

    return(
        <>
            <Header_buy name={'shop'}></Header_buy>
            <div>{page}</div>
        </>
    )
}