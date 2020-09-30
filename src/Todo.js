import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'

export const Todo = (props) => {

    return (
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={() => props.onOpen(props.todo.id)} 
        onLongPress={() => props.onRemove(props.id)}>
            <View style={styles.card}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        padding:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        marginTop: 5,
    }
})

