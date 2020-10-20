const firebase = require('firebase');
import "firebase/firestore";
import { getEnvVars } from '../../environments/environment'

// Firebase startup
exports.fbInit = async () => {
    firebase.initializeApp(await getEnvVars().firebaseConfig);
}