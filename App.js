import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';

// Components
import MeetingCalendar from './components/MeetingCalendar'
import MeetingList from './components/MeetingList'
import AddMeeting from './components/AddMeeting'

export default class App extends React.Component {
  state = {
    currentScreen: 'calendar'
  }

  switchScreen = screen => {
    this.setState({
      currentScreen: screen
    })
  }

  renderScreen = () => {
    switch(this.state.currentScreen) {
      case('calendar') : return <MeetingCalendar />
      case('meetingList') : return <MeetingList />
      case('addMeeting') : return <AddMeeting />
    }

  }

  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
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
