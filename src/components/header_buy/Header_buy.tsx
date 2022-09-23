import React from "react";

// @ts-ignore
import s from './Header_buy.module.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

interface Props{
    name:string
}

export const Header_buy =({name}:Props)=>{
    const dispatch=useDispatch()
// @ts-ignore
    const pcs=useSelector(state => state.pcs)
    return(
        <div className={s.header}>
            <div className={s.back}>
                <button onClick={()=>dispatch({type:"reset",payload: 1})}>
                    <Link to="/">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 34.8333C27.7445 34.8333 34.8334 27.7445 34.8334 19C34.8334 10.2555 27.7445 3.16666 19 3.16666C10.2555 3.16666 3.16669 10.2555 3.16669 19C3.16669 27.7445 10.2555 34.8333 19 34.8333Z" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 12.6667L12.6667 19L19 25.3334" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.3334 19H12.6667" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </button>
            </div>
            <div className={s.header}>
                <div className={s.title}>
                    {name}
                </div>
            </div>
        </div>

    )
}