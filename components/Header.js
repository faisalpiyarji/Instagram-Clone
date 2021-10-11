import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image 
            style={styles.logo} 
            source={require('../assets/header-logo.png')} 
            />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        
    },


    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    }
})

export default Header
