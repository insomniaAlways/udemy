import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import H1 from '../../components/Elements/Header/H1';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

import { connect } from 'react-redux';
import { addPlace } from '../../../store/actions/index';
import validate from '../../utility/validation';

class SharePlaceScreen extends Component {
  state = {
    placeName: "",
    controls: {
      placeName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: false
      },
      image: {
        value: null,
        valid: false
      } 
    },

  };

  onChangeText = value => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: value,
            valid: validate(
              value,
              prevState.controls.placeName.validationRules
            ),
            touched: true
          }
        }
      }
    }
      
    );
  };
  
  placeAddedhandler = () => {
    // if (this.state.controls.placeName.valid) {
      this.props.onPlaceAdded(this.state.controls.placeName.value, this.state.controls.location.value, this.state.controls.image.value)
    // }
  }

  onPickedImageHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      }
    })
  }

  onLocationAddedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }

        }
      }
    })
  }

  render() {
    // let submitButton = this.props.isLoading ? "Saving..." : "Share the Place!"
    let submitButton = (
      <Button title="Share the Place!"
        disabled={!this.state.controls.placeName.valid || !this.state.controls.location.valid || !this.state.controls.image.valid || this.props.isLoading} 
        onPress={this.placeAddedhandler} style={{borderRadius: 5}}></Button>
    )
    if(this.props.isLoading) {
      submitButton = <ActivityIndicator/>
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <H1 style={{color:'#008080'}}>Share a Place with us!</H1>
          <PickImage onPickedImage={this.onPickedImageHandler}/>
          <PickLocation onPickedLocation={this.onLocationAddedHandler}/>
          <PlaceInput valid={this.state.controls.placeName.valid} touched={this.state.controls.placeName.touched} placeName={this.state.controls.placeName.value} onChangeText={this.onChangeText} style={styles.input}/>
          <View style={styles.buttons}>{submitButton}</View>
        </View>
      </ScrollView>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onPlaceAdded: (placeName, location, image) => dispatch(addPlace(placeName, location, image)),
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loader.isLoading
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
  },
  input: {
    width: '80%'
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);