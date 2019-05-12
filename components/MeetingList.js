import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class MeetingList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    const {firebase} = this.props
    firebase.database.child(firebase.auth.currentUser.uid).on('value', snapshot => {
      let tempArr = []
      const meeting = snapshot.val()
      if (meeting === undefined) return
      Object.keys(meeting).forEach(val => {
        tempArr.push({
          firstName: meeting[val].firstName,
          lastName: meeting[val].lastName,
          id: meeting[val].id,
          meetingName: meeting[val].meetingName,
          scheduleList: meeting[val].scheduleList.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.date + '   '
          }, 'Schedule: ')
        })
      })
      this.setState({
        data: tempArr
      })
    })
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            title={`Meeting Name: ${item.meetingName} with ${item.firstName} ${item.lastName}`}
            subtitle={item.scheduleList}
            // avatar={{ uri: item.picture.thumbnail }}
            containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
          />
        )}
        keyExtractor={item => item.id}
      />
    )
  }
}