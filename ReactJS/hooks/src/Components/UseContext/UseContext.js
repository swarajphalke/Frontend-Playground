// useContext is a React hook that lets you share data between components without passing props manually at every level.

import {createContext, useContext} from 'react'

export const BioContext = createContext()

export const BioProvider = ({children}) =>{
    const myName = 'vinod';
    const myAge = 20;

    return (
        <BioContext.Provider value={myName}>
            {children}
        </BioContext.Provider>
    )
}