import React, {Component} from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';

// Components
import MeetingCalendar from './MeetingCalendar'
import MeetingList from './MeetingList'
import AddMeeting from './AddMeeting'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScreen: 'calendar'
    }
  }

  switchScreen = screen => {
    this.setState({
      currentScreen: screen
    })
  }

  renderScreen = () => {
    switch(this.state.currentScreen) {
      case('calendar') : return <MeetingCalendar {...this.props}/>
      case('meetingList') : return <MeetingList {...this.props}/>
      case('addMeeting') : return <AddMeeting {...this.props}/>
    }

  }
  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left>
            <Button onPress={() => this.props.firebase.doSignOut()} transparent>
              <Icon name="lock" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button first active onPress={()=> this.switchScreen('calendar')}><Text>Puppies</Text></Button>
              <Button last onPress={()=> this.switchScreen('meetingList')}><Text>Cubs</Text></Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="add" onPress={()=> this.switchScreen('addMeeting')}/>
            </Button>
          </Right>
        </Header>
        <Content padder>
          {this.renderScreen()}
        </Content>
      </Container>
    )
  }
}