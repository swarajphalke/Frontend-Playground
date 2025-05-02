// useContext is a React hook that lets you share data between components without passing props manually at every level.

import {createContext} from 'react'

export const BioContext = createContext()

export const BioProvider = ({children}) =>{
    const myName = 'swaraj';
    const myAge = 20;

    return (
        <BioContext.Provider value={{myName,myAge}}>
            {children}
        </BioContext.Provider>
    )
}