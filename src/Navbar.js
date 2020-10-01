import React from 'react'
import { View, Text, StyleSheet , Platform, Dimensions} from 'react-native'
export const Navbar = ({title}) => {
    const platform = (Platform.OS === 'android') ? 'Android' : 'iOS'
    const screen = Dimensions.get('window').scale
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title} ({platform}) ({screen})</Text>
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