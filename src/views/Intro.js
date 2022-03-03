import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default props => {
    return (
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Home')}>
            <View style={styles.container}>
                <Text style={styles.text}>Já quis saber qual seria seu peso em outros planetas?</Text>
                <Text style={[styles.text, { color: '#fa5e23' }]}>Descubra aqui!</Text>
                <View style={{ height: 30 }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textButton}>Toque para continuar</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A1265',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    textButton: {
        color: '#fa5e23',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text: {
        color: '#fff6d8',
        fontWeight: 'bold',
        fontSize: 50,
    },
})