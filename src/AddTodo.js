import React, {useState} from 'react'
import { TextInput, View, Button, StyleSheet, Alert, ScrollView, ImagePropTypes, Keyboard} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export const AddTodo = ({ addTodo, onRemove }) => {
    // локальный стейт
    const [value, setValue] = useState('')

    const addItemHandler = () => {
        // если строка не пуста до добавляем запись
        if(value.trim()){
            addTodo(value)
            setValue('')
            Keyboard.dismiss()
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
            <AntDesign.Button name="pluscircleo" size={24} onPress={addItemHandler}>Add Item</AntDesign.Button>
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