import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class SharePlaceScreen extends Component {
  placeAddedhandler = placeName => {
    this.props.onPlaceAdded(placeName)
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedhandler}/>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onPlaceAdded: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen);