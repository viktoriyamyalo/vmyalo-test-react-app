import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCUWWEdoaSo2ospgx5txw_ylkNJe-W_pKY",
    authDomain: "lorem-ipsum-77e48.firebaseapp.com",
    databaseURL: "https://lorem-ipsum-77e48.firebaseio.com",
    projectId: "lorem-ipsum-77e48",
    storageBucket: "lorem-ipsum-77e48.appspot.com",
    messagingSenderId: "680966329623"
  };

  if(!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export { auth };
