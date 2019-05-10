import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'

import Styles from '../styles/styles'
import Run from '../assets/images/Run.jpeg'

export default class Show extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image source={Run} style={{ ...Styles.imageStyle, marginTop: 20}} />
        <Button 
          title="Back to landing"
          onPress={() => this.props.switchScreen('landing')}
        />
      </View>
    )
  }
}