import React from "react";

// @ts-ignore
import s from './Home.module.scss';
import {HeaderHome} from "../../components/header/HeaderHome";
import {useProducts} from "../../hooks/products";
import { Product} from "../../components/Product/Product";
import {ErrorMessage} from "../../components/ErrorMessage";
import {Loader} from "../../components/Loader";
import {useDispatch, useSelector} from "react-redux";



interface Props{
}

export const Home =(props:Props)=>{

    const {products,error,loading} = useProducts()
    return(
        <div className={s.home}>
            {error && <ErrorMessage error={error}></ErrorMessage>}
            {loading && <Loader></Loader>}
            <HeaderHome></HeaderHome>
            <div className={s.wrapper}>
                {products.map(product=> <Product product={product} key={product.id}/>)}</div>
        </div>
    )
}