import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Side Drawer</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: 'white',
    flex: 1
  }
})

export default SideDrawer;