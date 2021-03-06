import React from 'react'

import AuthUserContext from './context'
import { withFirebase } from '../Firebase'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        authUser: false,
      }
    }

    componentDidMount() {
      const { firebase } = this.props

      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        if(authUser) {
          this.setState({ authUser: authUser })
        } else {
          this.setState({ authUser: null })
        }
      })
    }

    componentWillUnmount() {
      this.listener()
    }

    render() {
      const authUser = this.state
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.state} {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication