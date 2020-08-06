import firebase from "firebase"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBjdYSsOdZRZ_C3eFZCWZghFoJvrmeedLw",
    authDomain: "senior-mania-5b994.firebaseapp.com",
    databaseURL: "https://senior-mania-5b994.firebaseio.com",
    projectId: "senior-mania-5b994",
    storageBucket: "senior-mania-5b994.appspot.com",
    messagingSenderId: "772148875447",
    appId: "1:772148875447:web:a455d58db47e15b4dcbd32"
}

const app = firebase.initializeApp(config)

export default app
//export default firebase.initializeApp(config)