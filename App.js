import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import {Todo} from './src/Todo'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
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
    <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} />
  )

  if(todoId){
    content = <TodoScreen />
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
