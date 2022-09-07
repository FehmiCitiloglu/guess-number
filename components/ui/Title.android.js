import { StyleSheet, Text, Platform } from 'react-native'
import React from 'react'


const Title = ({ children }) => {

    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        // borderWidth: Platform.select({ iso: 0, android: 2 }),
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})
