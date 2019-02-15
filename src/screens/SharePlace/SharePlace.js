import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import H1 from '../../components/Elements/Header/H1';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

import { connect } from 'react-redux';
import { addPlace } from '../../../store/actions/index';

class SharePlaceScreen extends Component {
  state = {
    placeName: ""
  };

  onChangeText = val => {
    this.setState({
      placeName: val
    });
  };
  
  placeAddedhandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onPlaceAdded(this.state.placeName)
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <H1 style={{color:'#008080'}}>Share a Place with us!</H1>
          <PickImage/>
          <PickLocation/>
          <PlaceInput placeName={this.state.placeName} onChangeText={this.onChangeText}/>
          <View style={styles.buttons}>
            <Button title="Share the Place!" onPress={this.placeAddedhandler}></Button>
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
    margin: 8
  },
  place: {
    width: '100%',
    height: '100%'
  }
})
export default connect(null, mapDispatchToProps)(SharePlaceScreen);