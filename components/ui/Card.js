import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 36,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // shadow for android
        shadowColor: "black", // shadow for ios
        shadowOffset: { // shadow sizes
            width: 0,
            height: 2
        },
        shadowRadius: 6, // shadow expands
        shadowOpacity: 0.25 // how strong shadow is
    },
})
