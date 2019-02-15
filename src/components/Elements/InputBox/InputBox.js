import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class InputBox extends Component {
  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent"
        {...this.props}
        style={[styles.input, this.props.style]}
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
  }
})

export default InputBox;