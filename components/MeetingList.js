import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class MeetingList extends Component {
  render() {
    return (
      <ListItem
        title='Limited supply! Its like digital gold!'
        subtitle={
          <View style={styles.subtitleView}>
            <Image source={require('../assets/images/Run.jpeg')} style={styles.ratingImage}/>
            <Text style={styles.ratingText}>5 months ago</Text>
          </View>
        }
        leftAvatar={{ source: require('../assets/images/Logo.jpeg') }}
      />
    )
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})