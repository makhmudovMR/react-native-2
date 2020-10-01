import React, {useReducer} from 'react'
import {TodoContext} from './todoContext'
import {todoReducer} from './todoReducer'

// what is it?

export const TodoState = ({children}) => {
    let initState = {
        todos: [
            {id:1, title:'some title'}
        ]
    }

    let [state, dispatch] = useReducer(todoReducer, initState)

    const addTodo = title => dispatch({type:'addTodo', title:title})
    const removeTodo = id => dispatch({type:'removeTodo', id})
    const updateTodo = (id, title) => dispatch({type:'updateTodo', id, title})

    return <TodoContext.Provider 
    value={{
        todos:state.todos,
        addTodo,
        removeTodo,
        updateTodo,
    }}
>{children}</TodoContext.Provider>
}