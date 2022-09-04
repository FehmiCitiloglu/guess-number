import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

const InstructionsText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionsText

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
})
