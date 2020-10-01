import React, {useState, useContext} from 'react'
import { Navbar } from './Navbar'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todos/todoContext';
import { ScreenContext } from './context/screen/screenContext';



export const MainLayout = (props) => {
    const {todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
    let [count, setCount] = useState(0);
    // let [todoId, changeScreen] = useContext(ScreenContext);

    const [todoId, setTodoId] = useState(1)
    // const [todos, setTodos] = useState([
    //     {id: 1, title: 'Some todo'}
    // ])

    // const removeTodo = (id) => {
    //     setTodos(prev => prev.filter(todo => todo.id !== id))
    // }

    // const editTodo = (id, value) => {
    //     console.log('we are here')
    //     console.log(id, value)
    //     setTodos(old =>
    //     old.map(todo => {
    //         if (todo.id === id) {
    //         todo.title = value
    //         }
    //         return todo
    //     })
    //     )
    // }

    // const addTodo = (title) => {
    //     const newTodo = {
    //     id: Date.now().toString(),
    //     title: title,
    //     }

    //     setTodos(prevTodos => {
    //     return [
    //         ...prevTodos,
    //         newTodo
    //     ]
    //     })
    // }

    let content = (
        <MainScreen 
        count={count}
        setCount={setCount}
        todos={todos}
        removeTodo={removeTodo} 
        addTodo={addTodo} 
        openTodo={(id) => {
            changeScreen(id)
        }}/>
    )
    
    
    if(todoId){
        console.log('0000')
        console.log(todoId)
        console.log(todos)
        const selected = todos.find(item => item.id === todoId)
        console.log('is here ->?',selected)
        content = <TodoScreen  editTodo={updateTodo} removeTodo={(id) => {removeTodo(id); setTodoId(null);}} todo={selected} goBack={() => changeScreen(null)}/>
    }


    return (
        <View style={styles.container}>
            <Navbar title="Todo App"/>
            <ScrollView style={styles.content}>
                {content}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'stretch',
    },
    content: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    }
  });