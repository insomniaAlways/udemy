import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import StartMainTabs from '../MainTabs/startMainTabs';
import InputBox from '../../components/Elements/InputBox/InputBox';
import H1 from '../../components/Elements/Header/H1';
import BackgroundImage from '../../assets/images/background1.png';
import ButtonWithBackground from '../../components/Elements/Buttons/ButtonWithBackground';
import validate from '../../utility/validation';
import { connect } from 'react-redux';
import { tryAuth } from '../../../store/actions';

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
    authMode: 'login',
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        },
        touched: false
      },
    }
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

  changeAuthMode =  () => {
    this.setState((prevState) => {
      return {
        authMode: prevState.authMode == 'login' ? 'signup' : 'login'
      }
    })
  }

  onChangeText = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  }

  loginHandler = () => {
    this.props.onLogin({
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    })
    StartMainTabs();
  }

  render () {
    let headingText = <H1>Please Login</H1>;
    let pwContainerStyle = styles.portraitPwContainer
    let pwWraperStyle = styles.portraitPwWraper
    if (this.state.viewMode == 'landscape') {
      headingText = null
      pwContainerStyle = styles.landscapePwContainer
      pwWraperStyle = this.state.authMode == 'login' ? styles.portraitPwWraper : styles.landscapePwWraper
    }
    let confirmBlock = (
      <View style={pwWraperStyle}>
        <InputBox
          placeholder="Confirm Password"
          style={styles.input}
          value={this.state.controls.confirmPassword.value}
          onChangeText={(value) => this.onChangeText('confirmPassword',value)}
          valid={this.state.controls.confirmPassword.valid}
          touched={this.state.controls.confirmPassword.touched}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
    )
    
    if(this.state.authMode == 'login') {
      confirmBlock = null
    }
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground
             backgroundColor="#29aaf4"
             color="#fff"
             onPress={this.changeAuthMode}
             style={styles.buttonsWidth}>
             Switch to {this.state.authMode == 'login' ? 'Sign Up' : 'Login'}  
            </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <InputBox
              placeholder="Your E-mail address"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={(value) => this.onChangeText('email', value)}
              valid={this.state.controls.email.valid}
              touched={this.state.controls.email.touched}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              autoFocus={true}
            />
            <View style={pwContainerStyle}>
              <View style={pwWraperStyle}>
                <InputBox
                  placeholder="Password"
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={(value) => this.onChangeText('password', value)}
                  valid={this.state.controls.password.valid}
                  touched={this.state.controls.password.touched}
                  autoCorrect={false}
                  secureTextEntry={true}
                />
              </View>
              {confirmBlock}
            </View>
          </View>
          <ButtonWithBackground
            backgroundColor="#29aaf4"
            color="#fff"
            onPress={this.loginHandler}
            style={styles.buttonsWidth}
            disabled={
              !this.state.controls.email.valid ||
              !this.state.controls.password.valid ||
              !this.state.controls.confirmPassword.valid &&
              this.state.authMode == 'signup'
            }
          >Submit</ButtonWithBackground>
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

const mapDispatchToProps =(dispatch) => {
  return {
    onLogin: (authData) => dispatch(tryAuth(authData))
  }
}
export default connect(null, mapDispatchToProps)(AuthScreen);