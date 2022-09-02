import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={"number-pad"}
                autoCorrect={false}
                autoCapitalize={"none"}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: "#3b021f",
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
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb63f',
        borderBottomWidth: 2,
        color: '#ddb63f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    }
})
