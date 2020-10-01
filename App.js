import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import {Todo} from './src/Todo'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(1)
  const [todos, setTodos] = useState([
    {id: 1, title: 'Some todo'}
  ])

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const editTodo = (id, value) => {
    console.log('we are here')
    console.log(id, value)
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          todo.title = value
        }
        return todo
      })
    )
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }

    setTodos(prevTodos => {
      return [
        ...prevTodos,
        newTodo
      ]
    })
  }

  let content = (
    <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} openTodo={(id) => {
      setTodoId(id)
    }}/>
  )
  
  console.log('----')
  console.log('todosid ->',todoId)
  console.log('todos->',todos)
  console.log('----')

  if(todoId){
    const selected = todos.find(item => item.id === todoId)
    content = <TodoScreen  editTodo={editTodo} removeTodo={(id) => {removeTodo(id); setTodoId(null);}} todo={selected} goBack={() => setTodoId(null)}/>
  }

   

  return (
    <View style={styles.container}>
      <Navbar title="Todo App"/>
      <ScrollView style={styles.content}>
        {content}
      </ScrollView>
    </View>
  );
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
