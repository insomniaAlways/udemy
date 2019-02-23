import React, { Component } from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PlaceImage from '../../assets/images/background2.jpg';

class PickImage extends Component {
  state = {
    pickedImage: null
  }
  
  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: 'Pick an Image'}, res => {
      if(res.didCancel) {
        console.log("user canceled", res)
      } else if (res.error) {
         console.log('Error', res.error)
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        })
      }
      this.props.onPickedImage({uri: res.uri, base64: res.data})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.place}/>
        </View>
        <View style={styles.buttons}>
          <Button title="Pick Image" onPress={this.pickImageHandler}></Button>
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
