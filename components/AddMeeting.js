import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import { ListItem } from 'react-native-elements'

export default class AddMeeting extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = {
      meetingName: '',
      firstName: '',
      lastName: '',
      id: '',
      date: '2019-05-13',
      time: '',
      meetingList: [
      ]
    };
  }

  async createSchedule () {
    await this.props.firebase.createSchedule(
      this.state.meetingName,
      this.state.firstName,
      this.state.lastName,
      this.state.id,
      this.state.meetingList
    )
    this.props.switchScreen('calendar')
  }

  render() {
    return (
      <View>
        <Input
          value={this.state.meetingName}
          onChangeText={(val) => {
            if (val.length <= 25) {
              this.setState({
                meetingName: val
              })
            }
          }}
          placeholder='Meeting Name'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          value={this.state.firstName}
          onChangeText={(val) => {
            if (val.length <= 25) {
              this.setState({
                firstName: val
              })
            }
          }}
          placeholder='First Name'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          value={this.state.lastName}
          placeholder='Last Name'
          onChangeText={(val) => {
            if (val.length <= 25) {
              this.setState({
                lastName: val
              })
            }
          }}
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          value={this.state.id}
          placeholder='Id'
          onChangeText={(val) => {
            if (val.length <= 25) {
              this.setState({
                id: val
              })
            }
          }}
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <FlatList containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
          data={this.state.meetingList}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.date}\t${item.time}`}
              containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
            />
          )}
          keyExtractor={item => item.date+item.time}
        />
        <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 5}}>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-01-01"
            maxDate="2022-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 10,
              },
              dateInput: {
                marginLeft: 46,
              },
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
          <Input
            value={this.state.time}
            inputContainerStyle = {{ width: '46%' }}
            onChangeText={(val) => {
              if (val.length <= 25) {
                this.setState({
                  time: val
                })
              }
            }}
            placeholder='HH:MM'
            rightIcon={
              <Icon 
                name='plus'
                size={24}
                color='black'
                onPress={()=> {
                  this.setState({
                    meetingList: [
                      ...this.state.meetingList,
                      {
                        date: this.state.date,
                        time: this.state.time
                      }
                    ]
                  })
                }}
              />
            }
          />
        </View>
        <Button
          onPress={() => {
            this.createSchedule()
          }}
          title="Create Schedule"
        />
      </View>
    )
  }
}