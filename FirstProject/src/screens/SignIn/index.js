import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import Button from '../../components/Button';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Đăng Nhập</Text>
            <Text style={styles.bottom} />
            <Text style={styles.creat}>Nhập số điện thoại</Text>
            <Text style={styles.creat2}>Dùng số điện thoại để đăng nhập hoặc đăng kí tài khoản tại CodeFresher </Text>
            <TextInput styles={styles.input} placeholder="Nhập số điện thoại của bạn" />
            <Button onPress = {() => { Alert.alert('Hello World')}} />
        </View>
    );
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        margin: 15,
        fontSize: 16,
        fontWeight: "bold",
    },
    bottom: {
        width: '100%',
        height: 2,
        backgroundColor: '#CCDCCC',
    },
    creat: {
        fontSize: 15,
        margin: 15,
        marginTop: 30,
    },
    creat2: {
        fontSize: 13,
        marginLeft: 15,
        marginTop: 8,
    },
    input: {
        marginHorizontal: 20,
        borderColor: '#AAAAAA',
        marginTop: 16,

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
