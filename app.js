/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Đăng Nhập</Text>
      <Text style={styles.bottom}></Text>
      <Text style={styles.creat}>Nhập số điện thoại</Text>
      <Text style={styles.creat2}>Dùng số điện thoại để đăng nhập hoặc đăng kí tài khoản tại CodeFresher </Text>
      <TextInput styles={styles.input} placeholder = "Nhập số điện thoại của bạn" >  </TextInput>
      <Text style={styles.bottom}></Text>
      <Button styles={styles.button} title="Tiếp tục" borderColor="10"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head : {
    margin: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
  bottom :{
    width : '100%',
    height: 2,
    backgroundColor: '#CCDCCC',
  },
  creat : {
    fontSize : 15,
    margin : 15,
    marginTop : 30,
  },
  creat2 : {
    fontSize : 13,
    marginLeft : 15,
    marginTop : 8,
  },
  input : {
    height : 30,
    margin :15,
    borderWidth: 1 ,
    borderColor: '#AAAAAA'
  },
  button : {
    
  }
}); 

export default App;
