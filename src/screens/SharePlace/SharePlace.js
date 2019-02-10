import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().registerCommandListener((event, jjj, nnnn) => {
      debugger
      console.log(event, jjj, nnnn)
      this.onNavigatorEvent
    })
    
    // Navigator.setOnNavigatorEvent()
  }
  
  onNavigatorEvent = event => {
    debugger
    console.log(event)
  }
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