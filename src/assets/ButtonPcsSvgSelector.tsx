import React from "react";

interface Props{
    id:string
}

export const ButtonPcsSvgSelector =({id}:Props)=>{
    switch (id) {
        case 'minus':
            return (
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'plus':
            return (
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7.5L7 1.5L1 7.5" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );

        default:
            return null;
    }
}