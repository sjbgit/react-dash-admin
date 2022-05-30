import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    card: false,
    userProfile: false,
    notification: false
}

//will handle state for the appplication
export const ContextProvider = ({ children }) => {

    return (
        <StateContext.Provider value= {{test: 'test'}

        }>
            {children}
        
        </StateContext.Provider>
    )
}