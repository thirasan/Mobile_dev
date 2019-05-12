import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddMeeting extends Component {
  render() {
    return (
      <View>
        <Input
          placeholder='  First Name'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          placeholder='  Last Name'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          placeholder='  Id'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
      </View>
    )
  }
}