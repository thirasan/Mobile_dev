import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class MeetingList extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        {
          firstName: 'thirasan',
          lastName: 'chatwongwan',
          id: '132423514'
        },
        {
          firstName: 'narongsak',
          lastName: 'biker',
          id: '5819342'
        }
      ]
    }
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.firstName} ${item.lastName}`}
            subtitle={item.id}
            // avatar={{ uri: item.picture.thumbnail }}
            containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
          />
        )}
        keyExtractor={item => item.id}
      />
    )
  }
}