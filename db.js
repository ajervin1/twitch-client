import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
	apiKey: 'AIzaSyAqJDrarfo0j0eP5gUk9emybfG4kEQj62s',
	authDomain: 'fir-app-302112.firebaseapp.com',
	projectId: 'firebaseapp-302112',
	storageBucket: 'firebaseapp-302112.appspot.com',
	messagingSenderId: '547562435294',
	appId: '1:547562435294:web:fe6de21495a697023e084f',
	measurementId: 'G-5XRPC9HDD6'
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
export const db = firebase.firestore()
export const auth = firebase.auth()


