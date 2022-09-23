// @ts-ignore
import s from "./HeaderHome.module.scss";
import {SvgSelector} from "../../assets/SvgSelector";
import React from "react";
// @ts-ignore
import profile from '../../assets/image/profile.png';
import {Search} from "../search/Search";

interface Props{
}

export const HeaderHome =(props:Props)=>{
    return(
        <div className={s.header_fixed}>
                <div className={s.header}>
                    <div className={s.wrapper}>
                        <SvgSelector id={'apple'}></SvgSelector>
                        <div className={s.title}>BestFruitShop</div>
                    </div>
                    <div className={s.wrapper}>
                        <SvgSelector id={'profile'}></SvgSelector>
                    </div>

                </div>
                <Search></Search>
            <div className={s.super_header}>
            </div>
        </div>
    )
}


