import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import StartMainTabs from '../MainTabs/startMainTabs';
import InputBox from '../../components/Elements/InputBox/InputBox';
import H1 from '../../components/Elements/Header/H1';
import BackgroundImage from '../../assets/images/background1.png';
import ButtonWithBackground from '../../components/Elements/Buttons/ButtonWithBackground';

class AuthScreen extends Component {
  loginHandler = () => {
    StartMainTabs();
  }

  render () {
    return (
      <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
        <View style={styles.container}>
          <H1>Please Login</H1>
          <ButtonWithBackground backgroundColor="#29aaf4" color="#fff" onPress={() => alert('Hello')}>Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <InputBox placeholder="Your E-mail address" style={styles.input}/>
            <InputBox placeholder="Password" style={styles.input}/>
            <InputBox placeholder="Confirm Password" style={styles.input}/>
          </View>
          <ButtonWithBackground backgroundColor="#29aaf4" color="#fff" onPress={this.loginHandler}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
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
  },
  BackgroundImage: {
    width: '100%',
    flex: 1
  }
})

export default AuthScreen;