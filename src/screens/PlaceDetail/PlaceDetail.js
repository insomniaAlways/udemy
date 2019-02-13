import React, { Component } from "react";
import { Image, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class PlaceDetails extends Component {
  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.place.key)
    Navigation.pop(this.props.componentId)
  }

  render() {
    return (
        <View style={styles.container}>
          <Image source={this.props.place.image} style={styles.image}/>
          <Text style={styles.text}>{this.props.place.name}</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.placeDeleteHandler}>
              <Icons size={30} name="ios-trash" color="red"></Icons>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key)) 
  }
}
export default connect(null, mapDispatchToProps)(PlaceDetails);