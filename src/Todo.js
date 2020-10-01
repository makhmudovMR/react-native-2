import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'

export const Todo = (props) => {
    let Wrapper = (Platform.OS === 'android')? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper 
        activeOpacity={0.5} 
        onPress={() => props.onOpen(props.todo.id)} 
        onLongPress={() => props.onRemove(props.id)}>
            <View style={styles.card}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        padding:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        marginTop: 5,
    },
    title:{
        fontFamily:'robot-bold',
    }
})

