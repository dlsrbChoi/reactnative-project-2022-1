import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class RoundButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        marginBottom: 30,
        borderRadius: 35,
        

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },

            android: {
                elevation: 0,
                marginHorizontal: 30,
            },
        })
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
});