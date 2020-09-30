import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    
    text: {
        // color: '#fff',
        fontSize: 15,
        color: '#fff',
    }
})