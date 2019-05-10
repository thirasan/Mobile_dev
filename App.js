import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import Landing from './components/Landing'
import Show from './components/Show'

export default class App extends React.Component {
  state = {
    currentScreen: 'landing'
  }

  switchScreen = screen => {
    this.setState({
      currentScreen: screen
    })
  }

  renderScreen = () => (
    (this.state.currentScreen === 'landing')? 
    <Landing switchScreen={this.switchScreen} /> :
    <Show switchScreen={this.switchScreen} />
  )

  render() {
    return (
      this.renderScreen()
    )
  }
}
