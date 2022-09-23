import React, {createContext, useState} from "react";
import * as fs from "fs";

interface IModalContext{
    id: number
}

export const ModalContext= createContext<IModalContext>({
    id:0
})

export const ModalState=({children}:{children: React.ReactNode})=>{
    const [id,SetId]=useState(0)
    return(
        <ModalContext.Provider value={{id}}>
            {children}
        </ModalContext.Provider>
    )
}