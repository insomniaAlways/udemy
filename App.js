import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { connect } from 'react-redux';
import { addPlace, selectPlace, deletePlace, deselectPlace } from './store/actions/index';

class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  };
  onItemSelected = key => {
    this.props.onSelectPlace(key)
  };
  onItemDeleted = () => {
    this.props.onDeletePlace()
    this.props.onDeselectPlace()
  }
  onModalClose = () => {
    this.props.onDeselectPlace()
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace}
          onModalClose={this.onModalClose}
          onItemDeleted={this.onItemDeleted}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.onItemSelected}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)