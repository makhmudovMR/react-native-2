import React, { useState } from 'react'
import {View, Text,TextInput, StyleSheet, Button} from 'react-native'

export const TodoScreen = (props) => {

    let [data, setData] = useState({
        id: props.todo.id,
        title:props.todo.title
    })

    const func = () => {
        console.log(props.todo.id)
        console.log(props.todo.title)
        console.log(data.id, data.title)
        console.log('edit -- todo')
        props.editTodo(data.id, data.title)
    }
    
    return (
        <View>
            <Text>{props.todo.title}</Text>
            <Text>{props.todo.id}</Text>
            <View style={styles.buttons}>
                <Button title='Delete' onPress={() => props.removeTodo(props.todo.id)}/>
                <Button title='back' color='#ff0000' onPress={props.goBack}/>
            </View>
            <View>
                <TextInput value={data.title} onChangeText={text => setData({id:props.todo.id, title:text})}/>
                <Button title="Edit" onPress={func}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        justifyContent: 'space-around'
    }
})