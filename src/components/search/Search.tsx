// @ts-ignore
import s from "./Search.module.scss";
import React, {useState} from "react";
import {SvgSelector} from "../../assets/SvgSelector";


interface Props{
}

export const Search =(props:Props)=>{
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const submitHandler = async (event: React.FormEvent)=> {
        // setError("")
        event.preventDefault()

        if(value.trim().length==0){
            setError("please enter valid data")
            return
        }
    }

    // const changeHandler =(event: React.KeyboardEvent<HTMLInputElement>)=>{
    //     setValue(event.target.value)
    // }

    return(
        <div className={s.wrapper}>
            <div className={s.search}>
                <form onSubmit={submitHandler}>
                    <input className={s.input}
                           type='text'
                           placeholder='Search'
                           value={value}
                           onChange={e => setValue(e.target.value)}
                    />
                </form>
                <div>{error} {value}</div>
                <button className={s.btn}><SvgSelector id={'search'}></SvgSelector></button>
            </div>
        </div>
    );
}


