

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAiK3-DcJ6_eAnOpYYHXvzIfLTc-rhNgvc",
    authDomain: "todo-app-3ed04.firebaseapp.com",
    databaseURL: "https://todo-app-3ed04.firebaseio.com",
    projectId: "todo-app-3ed04",
    storageBucket: "todo-app-3ed04.appspot.com",
    messagingSenderId: "965229454744",
    appId: "1:965229454744:web:b3df1ff07695e57e92f7ed",
    measurementId: "G-J8WH6J38BF"
});
const db = firebaseApp.firestore();

export default db;