import React from 'react'
import { Text } from 'native-base';
import Firebase, { FirebaseContext } from './components/Firebase/'
import { withAuthentication } from './components/Session/'

// Components
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'

const Home = ({ ...props }) => {
  const { authUser } = props
  return (
    authUser === false ?
      <Text>Loading</Text> :
      authUser === null ?
        <LoginScreen firebase={props.firebase} /> :
        <HomeScreen {...props} />
  )
}

const MainScreen = withAuthentication(Home)

export default class App extends React.Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <MainScreen {...this.props} />
      </FirebaseContext.Provider>
    )
  }
}
