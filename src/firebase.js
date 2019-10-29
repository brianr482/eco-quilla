import firebase from 'firebase/app';
import 'firebase/firestore';
import env from './environment/environment';

firebase.initializeApp(env.firebase);

export default firebase;
