import React, { useReducer } from 'react'
import {ScreenContext} from './screenContext'
import {screenReducer} from './screenReducer'

export function ScreenState({children}){
    const [state, dispatch] = useReducer(screenReducer, null)

    const changeScreen = id => dispatch({type:'changeScreen', payload: id})
    return <ScreenContext.Provider value={{
        changeScreen,
        todoId:state
        }}>
        {children}
    </ScreenContext.Provider>
}