import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todos/TodoState';
import { ScreenState } from './src/context/screen/screenState';


async function loadApp(){
  await Font.loadAsync({
    'robot-regular': require('./assets/Roboto-Regular.ttf'),
    'robot-bold': require('./assets/Roboto-Bold.ttf'),
  })
}

export default function App() {

  let [isReady, setIsReady] = useState(false)

  if(!isReady){
    return <AppLoading 
    startAsync={loadApp} 
    onError={err => console.log(err)} 
    onFinish={() => setIsReady(true)}
    />
  }

   
  return (
    <ScreenState>
      <TodoState>
        <MainLayout/>
      </TodoState>
    </ScreenState>
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
