import React from 'react'
import {StyleSheet, View} from 'react-native'
import {AddTodo} from '../AddTodo'
import {Todo} from '../Todo'
import {CountPlus} from '../CountPlus'


export const MainScreen = ({count, setCount, addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View> 
            <CountPlus count={count} setCount={setCount} />
            <AddTodo addTodo={addTodo}/>
            {todos.map(item => {
                return <Todo key={item.id} onOpen={openTodo} todo={item} id={item.id} title={item.title}  onRemove={removeTodo}/> 
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    
})