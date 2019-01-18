import React from "react";
import { Modal, Image, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';

const placeDetails = (props) => {
  let modelContainer;
  if(props.selectedPlace) {
    modelContainer = (
        <View>
          <Image source={props.selectedPlace.image} style={styles.image}/>
          <Text style={styles.text}>{props.selectedPlace.name}</Text>
        </View>
    );
  }
  return (
      <Modal onRequestClose={props.onModalClose} visible={props.selectedPlace !== null} animationType="slide">
        <View style={styles.modal}>
          {modelContainer}
          <View style={styles.button}>
            <TouchableOpacity onPress={props.onItemDeleted}>
              <Icons size={30} name="ios-trash" color="red"></Icons>
            </TouchableOpacity>
            <Button title="Close" onPress={props.onModalClose}/>
          </View>
        </View>
      </Modal>
  )
}
const styles = StyleSheet.create({
  modal : {
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
  // button: {
  //   flex:1,
  //   flexDirection:"row",
  //   justifyContent: "center"
  // },
  delete : {
    color: "red",
    marginRight: "10",
    backgroundColor: "red"
  }
})

export default placeDetails;