import { auth } from '../firebase/index';
import * as firebase from 'firebase';

let user;

if(localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
}

if(user) {
    console.log(user.email, user.providerData[0].providerId);
    firebase.auth().signInWithEmailAndPassword(user.email, user.providerData[0].providerId).then(() => console.log('USER signed in'));
}

console.log('USER', user);
const INITIAL_STATE = {currentuser: user || {}};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SIGN_IN': {
            console.log('Signin flows through user reducer')
            console.log(action.payload);
            if(action.error) {
                console.log(action.error);
                return {...state}
            }

            localStorage.setItem('user', JSON.stringify(action.payload));

            return {...state, currentuser: action.payload}
          
        }

        case 'SIGN_OUT': {
            console.log('Logout flows through user reducer');
            localStorage.setItem('user', '');
            console.log(localStorage);
            return {...state, currentuser: {}}

        }

        case 'SIGN_UP': {
            console.log('Signed up');
            if(action.error) {
                return {...state}
            }

            localStorage.setItem('user', JSON.stringify(action.payload));

            return {...state, currentuser: action.payload}
            
        
        }

        default: {
            return state;
        }
    }
}


