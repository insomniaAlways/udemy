import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import StartMainTabs from '../MainTabs/startMainTabs';
import InputBox from '../../components/Elements/InputBox/InputBox';
import H1 from '../../components/Elements/Header/H1';
import BackgroundImage from '../../assets/images/background1.png';
import ButtonWithBackground from '../../components/Elements/Buttons/ButtonWithBackground';

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  }

  constructor(props) {
    super(props)
    Dimensions.addEventListener('change', this.upDateViewMode)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.upDateViewMode)
  }

  upDateViewMode = (Dimension) => {
    this.setState({
      viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'   
    })
  }

  loginHandler = () => {
    StartMainTabs();
  }

  render () {
    let headingText = <H1>Please Login</H1>;
    let pwContainerStyle = styles.portraitPwContainer
    let pwWraperStyle = styles.portraitPwWraper
    if (this.state.viewMode == 'landscape') {
      headingText = null
      pwContainerStyle = styles.landscapePwContainer
      pwWraperStyle = styles.landscapePwWraper
    }
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground backgroundColor="#29aaf4" color="#fff" onPress={() => alert('Hello')} style={styles.buttonsWidth}>Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <InputBox placeholder="Your E-mail address" style={styles.input}/>
            <View style={pwContainerStyle}>
              <View style={pwWraperStyle}>
                <InputBox placeholder="Password" style={styles.input}/>
              </View>
              <View style={pwWraperStyle}>
                <InputBox placeholder="Confirm Password" style={styles.input}/>
              </View>
            </View>
          </View>
          <ButtonWithBackground backgroundColor="#29aaf4" color="#fff" onPress={this.loginHandler} style={styles.buttonsWidth}>Submit</ButtonWithBackground>
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
    marginRight:0,
    marginLeft: 0
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  buttonsWidth: {
    width: '80%',
    alignItems: 'center',
    borderWidth: 0
  },
  portraitPwContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  portraitPwWraper: {
    width: '100%'
  },
  landscapePwContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  landscapePwWraper: {
    width: '45%'
  }
})

export default AuthScreen;