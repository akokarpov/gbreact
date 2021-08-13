import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyD1CvO4citA56_iuXanDeNvmmXkxKGwlbM",
  authDomain: "reactchatter2021.firebaseapp.com",
  databaseURL: "https://reactchatter2021-default-rtdb.firebaseio.com",
  projectId: "reactchatter2021",
  storageBucket: "reactchatter2021.appspot.com",
  messagingSenderId: "61170980316",
  appId: "1:61170980316:web:ba5170f24392ec56f92b19",
};

firebase.initializeApp(config);

export const db = firebase.database();