import React, {Component} from 'react'
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
      case('scheduleList') : return <MeetingList {...this.props}/>
      case('addMeeting') : return <AddMeeting switchScreen={this.switchScreen} {...this.props}/>
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
              <Button first active={this.state.currentScreen === 'calendar' ? true : false} onPress={()=> this.switchScreen('calendar')}><Text>Calendar</Text></Button>
              <Button last active={this.state.currentScreen === 'scheduleList' ? true : false} onPress={()=> this.switchScreen('scheduleList')}><Text>Schedules</Text></Button>
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