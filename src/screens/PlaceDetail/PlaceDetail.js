import React from "react";
import { Image, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';

const placeDetails = (props) => {
  debugger
  return (
      <View style={styles.container}>
        <Image source={props.place.image} style={styles.image}/>
        <Text style={styles.text}>{props.place.name}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <Icons size={30} name="ios-trash" color="red"></Icons>
          </TouchableOpacity>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container : {
    margin:33
  },
  image: {
    width: "100%",
    height: 200
  },
  text : {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28
  },
  delete : {
    color: "red",
    marginRight: "10",
    backgroundColor: "red"
  }
})

export default placeDetails;