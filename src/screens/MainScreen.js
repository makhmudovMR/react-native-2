import React from 'react'
import {StyleSheet, View} from 'react-native'
import {AddTodo} from '../AddTodo'
import {Todo} from '../Todo'


export const MainScreen = ({addTodo, todos, removeTodo}) => {
    return (
        <View>
            <AddTodo addTodo={addTodo}/>
            {todos.map(item => {
            return <Todo key={item.id} id={item.id} title={item.title}  onRemove={removeTodo}/> 
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    
})