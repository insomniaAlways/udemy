import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = (props) => (
  <Text {...props} style={[styles.defaultTextStyle, props.style]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#bbb',
  }
})

export default DefaultText;