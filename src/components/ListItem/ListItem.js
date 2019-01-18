import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

const listItem = (props) => (
  <TouchableNativeFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
    <Image source={props.placeImage} style={styles.image}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  },
  image : {
    height: 30,
    width: 30
  }
})
export default listItem;