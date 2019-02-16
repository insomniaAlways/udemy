import React, { Component } from "react";
import { Image, View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class PlaceDetails extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
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
      viewMode: Dimension.window.height > 500 ? 'portrait' : 'landscape'   
    })
  }

  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.place.key)
    Navigation.pop(this.props.componentId)
  }

  render() {
    let image = <Image source={this.props.place.image} style={styles.image}/>
    let text = <Text style={styles.text}>{this.props.place.name}</Text>
    let deleteButton = (
      <TouchableOpacity onPress={this.placeDeleteHandler}>
        <Icons size={30} name="ios-trash" color="red"></Icons>
      </TouchableOpacity>
    )
    let landscapeMode = (
      <View style={styles.landscapeMode}>
        <View style={styles.landscapeModeDetails}>
          <View>{text}</View>
          <View>{deleteButton}</View>
        </View>
        <View style={styles.landscapeModeImage}>{image}</View>
      </View>
    )
    let portraitMode = (
      <View style={styles.container}>
        <View>{image}</View>
        <View>{text}</View>
        <View style={{alignItems: 'center'}}>{deleteButton}</View>
      </View>
    )
    let mainView = this.state.viewMode == 'portrait' ? portraitMode : landscapeMode
    return (
      <View>{mainView}</View>
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
  },
  landscapeMode: {
    alignItems: 'center'
  },
  landscapeModeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: "60%",
  },
  landscapeModeImage: {
    width: "60%",
    height: '90%',
    margin: 8,
    alignItems: 'center'
  }

})

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key)) 
  }
}
export default connect(null, mapDispatchToProps)(PlaceDetails);