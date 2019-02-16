import React, { Component } from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';

import PlaceImage from '../../assets/images/background2.jpg';

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={PlaceImage} style={styles.place}/>
        </View>
        <View style={styles.buttons}>
          <Button title="Pick Image" onPress={() => alert('Pick Image')}></Button>
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
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  buttons: {
    margin: 8,
    borderRadius: 5
  },
  place: {
    width: '100%',
    height: '100%'
  }
})

export default PickImage;
