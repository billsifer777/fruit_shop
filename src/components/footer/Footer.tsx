import React from "react";


// @ts-ignore
import s from "./Footer.module.scss";
import {SvgSelectorFooter} from "./SvgSelectorFooter";

interface Props{
}

export const Footer =(props:Props)=>{
    return(
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.wrapper_top}>
                    <div><SvgSelectorFooter id={'home'}/></div>
                    <div><SvgSelectorFooter id={'bell'}/></div>
                    <div className={s.mid_button}><SvgSelectorFooter id={'mid_button'}/></div>
                    <div><SvgSelectorFooter id={'shop'}/></div>
                    <div><SvgSelectorFooter id={'setting'}/></div>
                </div>
                <div className={s.wrapper_bottom}>
                    <SvgSelectorFooter id={'line'}/>
                </div>
            </div>
        </footer>

    )
}