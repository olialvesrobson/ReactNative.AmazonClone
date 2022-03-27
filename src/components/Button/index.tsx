import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
    text: string,
    onPress: () => void;
    containerStyle?: object;
    textStyle?: object;
}

const Button = ({text, onPress, containerStyle, textStyle} : ButtonProps ) => {
    return (
        <Pressable onPress={onPress} style={{...styles.root, ...containerStyle}}>
            <Text style={{...styles.text, ...textStyle}}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Button

