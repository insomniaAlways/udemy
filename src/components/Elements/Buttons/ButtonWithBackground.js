import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const ButtonWithBackground = (props) => {
  let content = (
    <View style={[styles.button, props.style, {backgroundColor: props.backgroundColor}]}>
      <Text style={{color: props.color}}>{props.children}</Text>
    </View>
  );
  if(Platform.OS == 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    )
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default ButtonWithBackground;