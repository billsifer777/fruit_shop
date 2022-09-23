// @ts-ignore
import s from "./Product.module.scss";
import React, {useState} from "react";
import {IProduct} from "../model";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";



interface productProps{
    product:IProduct
}
//тут была функция
    export const Product =({product}:productProps)=>{

    return(
        <div className={s.products}>
            <Link to={`/shop/${product.id}`}>
            <div className={s.item}>
                <img className={s.item_img} src={product.image}/>
                <div className={s.title}>
                    {product.title.substring(0, 15)}...
                </div>
                <div className={s.price}>{product.price}</div>

            </div>
            </Link>

        </div>
    );
}


