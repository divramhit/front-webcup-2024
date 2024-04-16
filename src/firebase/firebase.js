import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, isSupported } from 'firebase/messaging';
import { getStorage } from 'firebase/storage';

// Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyAvXfr-sgPsvNhkVSP1A1tKVCDIINV2av4",
    authDomain: "pwa-test-push-5d707.firebaseapp.com",
    projectId: "pwa-test-push-5d707",
    storageBucket: "pwa-test-push-5d707.appspot.com",
    messagingSenderId: "275131161219",
    appId: "1:275131161219:web:d2bbc4e512530b5d5459b6",
    measurementId: "G-9QEZXDM2F5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Call by await messaging() everytime a messaging instance is needed
export const messaging = async () => await isSupported() && getMessaging(app);
export const storage = getStorage(app); 