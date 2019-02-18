import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class InputBox extends Component {
  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent"
        {...this.props}
        style={[styles.input, this.props.style, !this.props.valid && this.props.touched ? styles.invalid: null]}
      />    
    )
  }
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  }
})

export default InputBox;