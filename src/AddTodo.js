import React, {useState} from 'react'
import { TextInput, View, Button, StyleSheet, Alert, ScrollView, ImagePropTypes } from 'react-native'



export const AddTodo = ({ addTodo, onRemove }) => {
    // локальный стейт
    const [value, setValue] = useState('')

    const addItemHandler = () => {
        // если строка не пуста до добавляем запись
        if(value.trim()){
            addTodo(value)
            setValue('')
        } else {
            Alert.alert('Текстовое полу не может быть пустым')
            // error
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input} 
            onChangeText={text => setValue(text)} 
            value={value}
            autoCorrect={true}
            autoCapitalize='words'
            onRemove={onRemove}
            />
            <Button title="Add item" onPress={addItemHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input:{
        width: '70%',
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: '#000',
    }
})