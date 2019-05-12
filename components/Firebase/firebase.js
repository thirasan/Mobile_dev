import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import firebaseConfig from '../../config/firebase'

const config = firebaseConfig

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.database = app.database().ref()

    this.googleProvider = new app.auth.GoogleAuthProvider()
  }

  doCreateUserWithEmailAndPassword = (email, password, rePassword) =>{
    if (password === rePassword && password !== '' && rePassword !== '') {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => alert('Account Created'))
      .catch(error => alert(error))
    } else {
      alert('Password and Re-pasword does not match')
    }
  }

  doSignInWithEmailAndPassword = (email, password) =>{
    this.auth.signInWithEmailAndPassword(email, password)
    .catch(error => {
      alert(error)
    })
  }

  doSignInWithGoogle = async () => {
    const result = await Expo.Google.logInAsync({
      androidClientId:"970509861000-rieiu7kpuod5g4j2f2dhkh9ipjq8e6du.apps.googleusercontent.com",
      iosClientId:"970509861000-rieiu7kpuod5g4j2f2dhkh9ipjq8e6du.apps.googleusercontent.com",
      webClientId:"970509861000-463aa9sbrc1ah0ab05a433qndplt092e.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });

    const { idToken, accessToken } = result;
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    this.auth.signInAndRetrieveDataWithCredential(credential)
  }

  doSignOut = () => this.auth.signOut()

  createSchedule = (meetingName, firstName, lastName, id, meetingList) => {
    if (this.auth.currentUser === undefined) return;
    const databaseRef = this.database.child(this.auth.currentUser.uid)
    databaseRef.push().set({
      meetingName: meetingName,
      firstName: firstName,
      lastName: lastName,
      id: id,
      scheduleList: meetingList
    })
  }

  deleteSchedule = (key) => {
    console.log(key)
    if (this.auth.currentUser === undefined) return;

    const databaseRef = this.database.child(this.auth.currentUser.uid)
    const scheduleRef = databaseRef.child(key)
    scheduleRef.set(null)
    
  }
}
export default Firebase