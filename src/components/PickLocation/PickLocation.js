import React, { Component } from 'react';
import {View, StyleSheet, Image, Button, Text} from 'react-native';

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.buttons}>
          <Button title="Locate me" onPress={() => alert('Pick Image')}></Button>
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
})

export default PickImage;
