import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Navigation } from 'react-native-navigation';

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    if(this.props.places.find(place => place.key == key)) {
      let place = this.props.places.find(place => place.key == key)
      Navigation.push(this.props.componentId, {
        component: {
          name: 'awesome-place.PlaceDetailScreen',
          passProps: {
            place: place
          },
          options: {
            topBar: {
              title: {
                text: place.name
              }
            }
          }
        }
      });

    }
  }
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}
export default connect(mapStateToProps)(FindPlaceScreen);