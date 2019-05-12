import React, { Component } from 'react'
import { Alert, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
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
      const keys = snapshot.key
      if (meeting !== null) {
        Object.keys(meeting).forEach(val => {
          tempArr.push({
            key: val,
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
      }
    })
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            title={`Meeting Name: ${item.meetingName}\nParticapate: ${item.firstName} ${item.lastName}\nId: ${item.id}`}
            subtitle={item.scheduleList}
            rightIcon={
              <Icon
                name='trash'
                size={24}
                color='black'
                onPress={() => {
                  Alert.alert(
                    'Confirm',
                    'Do you want to delete this schedule ?',
                    [
                      {text: 'OK', onPress: () =>  {
                        this.props.firebase.deleteSchedule(item.key)
                      }
                      },
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                    ],
                  )
                }}
              />
            }
            containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
          />
        )}
        keyExtractor={item => item.id}
      />
    )
  }
}