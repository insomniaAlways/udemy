import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

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
      }
    }
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
    if (this.state.controls.placeName.valid) {
      this.props.onPlaceAdded(this.state.controls.placeName.value)
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <H1 style={{color:'#008080'}}>Share a Place with us!</H1>
          <PickImage/>
          <PickLocation/>
          <PlaceInput valid={this.state.controls.placeName.valid} touched={this.state.controls.placeName.touched} placeName={this.state.controls.placeName.value} onChangeText={this.onChangeText} style={styles.input}/>
          <View style={styles.buttons}>
            <Button title="Share the Place!" disabled={!this.state.controls.placeName.valid} onPress={this.placeAddedhandler} style={{borderRadius: 5}}></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onPlaceAdded: (placeName) => dispatch(addPlace(placeName))
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
export default connect(null, mapDispatchToProps)(SharePlaceScreen);