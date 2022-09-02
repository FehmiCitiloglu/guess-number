import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const GameScreen = ({ usersNumber }) => {
    return (
        <View style={styles.screen}>
            <Title >Opponent's Guess</Title>
            <View>
                <Text>Higher or lower ?</Text>
            </View>
            {/* <View>Log Rounds</View> */}
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})
