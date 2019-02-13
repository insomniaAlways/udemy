import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import StartMainTabs from '../MainTabs/startMainTabs';
import InputBox from '../../components/Elements/InputBox/InputBox';
import H1 from '../../components/Elements/Header/H1';

class AuthScreen extends Component {
  loginHandler = () => {
    StartMainTabs();
  }

  render () {
    return (
      <View style={styles.container}>
        <H1>Please Login</H1>
        <Button title="Switch to Login"></Button>
        <View style={styles.inputContainer}>
          <InputBox placeholder="Your E-mail address" style={styles.input}/>
          <InputBox placeholder="Password" style={styles.input}/>
          <InputBox placeholder="Confirm Password" style={styles.input}/>
        </View>
        <Button title="Submit" onPress={this.loginHandler}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     justifyContent: 'center',
     alignItems : 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
  }
})

export default AuthScreen;