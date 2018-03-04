import { auth } from '../firebase/index';

export function signIn(email, password) {
    const request = auth.doSignInWithEmailAndPassword(email, password);
    console.log('Action fired');
    return {
        type: 'SIGN_IN',
        payload: request
    }
}

export function signOut() {
    const request = auth.doSignOut();
    console.log('Signed out');
    return {
        type: 'SIGN_OUT',
        payload: request
    }
}

export function signUp(email, password) {
    const request = auth.doCreateUserWithEmailAndPassword(email, password);
    return {
        type: 'SIGN_UP',
        payload: request
    }
}

export function updateProfile(username) {
    const request = auth.doUpdateProfile(username);
    return {
        type: 'UPDATE_PROFILE',
        payload: request
    }
}

export function changeFontSize(num) {
    return {
        type: 'CHANGE_FONT_SIZE',
        payload: num
    }
}

export function changeFontFamily(family) {
    return {
        type: 'CHANGE_FONT_FAMILY',
        payload: family
    }
}

export function changeBackgroundColor(color) {
    return {
        type: 'CHANGE_BACKGROUND_COLOR',
        payload: color
    }

}

export function deleteLastParagraph() {
    return {
        type: 'DELETE_LAST_PARAGRAPH'
    }
}