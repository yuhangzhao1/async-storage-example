import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import {Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

//This demo is adapted from https://www.tutorialspoint.com/react_native/react_native_asyncstorage.htm

class AsyncStorageExample extends Component {
   state = {
      inputValue:'',
      name: ''
   }
   componentDidMount = () => {AsyncStorage.getItem('name').then((value) => this.setState({ name: value }))}
   componentDidUpdate = () => {AsyncStorage.getItem('name').then((value) => this.setState({ name: value }))}


   saveToMemory = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ name: value });
   }

   resetMemory= () => {
      AsyncStorage.setItem('name', '');
   }

   onChangeText = (value) => {
      this.saveToMemory(value);
      this.setState({inputValue: value});
   }

   onReset = () =>{
      this.resetMemory();
      this.setState({inputValue:''});
   }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none' value={this.state.inputValue}
            onChangeText = {this.onChangeText}/>
            <Text>
               Retrieved from memory: {this.state.name}
            </Text>
            <TouchableOpacity onPress={this.onReset} style={styles.button}> 
               <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
         </View>
         
      )
   }
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',    
      justifyContent: 'center',
     // marginTop: 50
   },
   textInput: {
      margin: 5,
      height: 50,
      width: 300,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   },
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      marginTop: 50,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})