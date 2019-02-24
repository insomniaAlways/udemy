import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Navigation } from 'react-native-navigation';
import { getPlace } from '../../../store/actions/index'

class FindPlaceScreen extends Component {
  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1),
    placeAnim: new Animated.Value(0)
  }
  constructor(props) {
    super(props) 
  }

  componentDidAppear() {
    this.setState({
      placesLoaded: false
    })
  }

  componentDidDisappear() {
    this.props.onGetPlaces()
  }

  componentDidMount() {

  }

  placesLoadedHandler = () => {
    Animated.timing(this.state.placeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
    // this.setState({
    //   placesLoaded: this.props.places.length
    // })
  }

  searchPlace = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: this.props.places.length
      })
      this.placesLoadedHandler()
    })
  }
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
    let searchBox = (
      <Animated.View style={{
        opacity: this.state.removeAnim,
        transform: [{
            scale: this.state.removeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [12, 1]
            })
          }]
        }}>
        <TouchableOpacity onPress={this.searchPlace}>
          <View style={styles.searchButton}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    )
    let placeList = (
      <Animated.View style={{
        opacity: this.state.placeAnim
      }}>
        <View>
          <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
        </View>
      </Animated.View>
    )
    let content = this.state.placesLoaded ? placeList : searchBox
    return (
      <View style={this.state.placesLoaded ? styles.placeList : styles.searchContainer}>{content}</View>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 50,
    padding: 10,
    width: 200,
    alignItems: 'center'
  },
  searchText: {
    color: '#4ED1FE',
    fontSize: 14
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeList: {
    justifyContent: 'flex-start'
  }
})
const mapDispatchToProps = dispatach => {
  return {
    onGetPlaces : dispatach(getPlace())
  }
}
const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);