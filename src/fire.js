import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyANKu5JNGZXx_oumisvmWc9iKrTIm65WFI",
    authDomain: "reclami-31a06.firebaseapp.com",
    databaseURL: "https://reclami-31a06.firebaseio.com",
    projectId: "reclami-31a06",
    storageBucket: "reclami-31a06.appspot.com",
    messagingSenderId: "707257861751"

};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
export const dbstore = firebase.firestore();
export const time = firebase.database.ServerValue.TIMESTAMP;

export const isAuthenticated = () => {
    return !!auth.currentUser
};
