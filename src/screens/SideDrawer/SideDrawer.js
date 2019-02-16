import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  render () {
    return (
      <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.drawerItems}>
          <Icons name={Platform.OS == 'android' ? "md-log-out" : "ios-log-out"}
           size={30} 
           color="#bbb" 
           style={styles.drawerItemIcons}/>
          <Text>Sign Out</Text>
        </View>
      </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: 'white',
    flex: 1
  },
  drawerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcons:{
    marginRight: 10
  }
})

export default SideDrawer;