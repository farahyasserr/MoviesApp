import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({
    title,
    style,
    onPress,
    disabled,
    titleStyle
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            disabled={disabled}
            style= {disabled? styles.buttonDisabled  : {...styles.button , ...style }  }
            onPress={onPress}
            >
                <Text style = {{...styles.title, ...titleStyle}} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginVertical: 10,

    },
    buttonDisabled:{
        borderRadius: 20,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
    },
    container:{
        alignItems: 'center',
        width: '100%'
    },
    title:{
        color: 'white',
        fontFamily: 'Cairo-SemiBold',
        fontSize: 16 ,
    }
})


export default Button;
