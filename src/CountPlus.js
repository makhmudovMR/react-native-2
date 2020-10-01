import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export const CountPlus = (props) => {
    return (
        <View style={styles.foView}>
            <Text>{props.count}</Text>
            <Button title="plus"  onPress={() => props.setCount(props.count + 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    foView:{
        marginBottom:10
    }
})