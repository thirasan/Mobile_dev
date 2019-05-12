import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import { ListItem } from 'react-native-elements'

export default class AddMeeting extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = { 
      date: '2018-05-15',
      meetingList: [
        {
          date: '2018-05-15',
          time: '18:00'
        }
      ]
    };
  }

  displayMeetingList = () => {

  }

  render() {
    return (
      <View>
        <Input
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
          placeholder='Last Name'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          placeholder='Id'
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
        <View style={{ flexDirection: "row" }}>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-01-01"
            maxDate="2019-01-01"
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
            inputContainerStyle = {{ width: '46%' }}
            placeholder='HH/MM'
            rightIcon={
              <Icon 
                name='plus'
                size={24}
                color='black'
                onPress={()=> alert('sdsd')}
              />
            }
          />
        </View>
      </View>
    )
  }
}