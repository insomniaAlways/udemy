import React, { Component } from 'react';
import {View, StyleSheet, Image, Button, Text, Dimensions} from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

class PickImage extends Component {
  state= {
    focusedLocation: {
      latitude: 12.972442,
      longitude: 77.580643,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    },
    locationChoosen: false
  }
  pickLocation = event => {
    const coords = event.nativeEvent.coordinate
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    })
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChoosen: true
      }
    })
    this.props.onPickedLocation({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(res => {
      const coords = {
        nativeEvent: {
          coordinate: {
            latitude: res.coords.latitude,
            longitude: res.coords.longitude,
          }
        }
      }
      this.pickLocation(coords)
    })
  }
  render() {
    let marker;
    if(this.state.locationChoosen) {
      marker = <Marker coordinate={this.state.focusedLocation}/>
    }
    return (
      <View style={styles.container}>
        <MapView 
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocation}
          ref={ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.buttons}>
          <Button title="Locate me" onPress={this.getLocation}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  map: {
    width: '80%',
    height: 150
  },
  buttons: {
    margin: 8,
    borderRadius: 5
  },
})

export default PickImage;
