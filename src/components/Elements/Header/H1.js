import React from 'react';
import { StyleSheet } from 'react-native';
import DefaultText from '../Texts/DefaultText';

const H1 = (props) => (
  <DefaultText {...props} style={[styles.text, props.style]}>
    {props.children}
  </DefaultText>
)

const styles =  StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})

export default H1;