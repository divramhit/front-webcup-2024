import { db, messaging } from "./firebase";
import { doc, setDoc } from 'firebase/firestore';
import { getToken, onMessage } from 'firebase/messaging';

const VAPID_KEY = "BEKv1KYpkQH4QBERbk6CYq_W97j3G41cCAc2o1cgHXb39iKWimyfDQYaDMtLNij1gzuNlcM0jkqD2IUc30Ms-WY";
const FCM_TOKEN_COLLECTION = "fcmTokens";

export async function requestNotificationsPermissions(uid){
    console.log('Requesting Notifications Permissions...');

    const permission = await Notification.requestPermission();

    if (permission === 'granted')
    {
        await saveMessagingDeviceToken(uid)
    } else {
        console.log('Unable to get Permission..')
    }
}

export async function saveMessagingDeviceToken(uid = null) {
    const msg = await messaging();
    const registration = await navigator.serviceWorker.ready;
    console.log("registration", registration)
    const fcmToken = await getToken(
        msg,
        {
            serviceWorkerRegistration: registration, 
            vapidKey: VAPID_KEY 
        }
    );

    if (fcmToken) {
        console.log('Got FCM device Token: ', fcmToken);

        if (uid)
        {
            const tokenRef = doc(db, FCM_TOKEN_COLLECTION, uid);
            await setDoc(tokenRef, { fcmToken });
        }
    } else {
        requestNotificationsPermissions(uid);
    }
}