import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    card: false,
    userProfile: false,
    notification: false
}

//will handle state for the appplication - notes
//whatever is passed in the value of the provider will be passed
//to all parts of the application
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const handleClick = (clicked) => {        
        setIsClicked({...initialState, [clicked]:true })
    }
    const [screenSize, setScreenSize] = useState(undefined)
    
    return (
        <StateContext.Provider 
            value= {{
                activeMenu,
                setActiveMenu,
                isClicked, 
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {children}
        
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);