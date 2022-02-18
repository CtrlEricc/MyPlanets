import React from 'react'
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'

export default props => {
    let color = '#2a1265'
    if (props.name === 'Terra' || props.name === props.selected) {
        color = '#4a20a8'
    }
    return (
        <TouchableWithoutFeedback
            disabled={props.name === 'Terra' ? true : false}
            onPress={() => props.onClick(props.name)}>
            <View style={[styles.card, { backgroundColor: color }]}>
                <Image style={styles.image} source={props.imageUri} />
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.subtitle}>Força G: {props.gravity}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#4a20a8',
        borderRadius: 20,
        borderWidth: 3,
        height: 170,
        width: 110,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
    },
    image: {
        marginTop: 10,
        height: 80,
        width: 80,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fa5e23',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fa5e23',
        marginBottom: 10,
    },
})