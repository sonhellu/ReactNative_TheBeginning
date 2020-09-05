import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Button({onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        marginTop: 10,
        width: '90%',
        marginLeft: 20,
        borderRadius: 6,
    },
    continue: {
        color: 'white',
    }
});

