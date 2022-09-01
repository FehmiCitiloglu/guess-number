import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />

            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>

        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: "#72063c",
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
