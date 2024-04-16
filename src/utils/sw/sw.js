import { defaultCache } from "@serwist/next/browser";
import { installSerwist } from "@serwist/sw";
import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

installSerwist({
    precacheEntries: self.__SW_MANIFEST,
    skipWaiting: true,
    clientsClaim: true,
    navigationPreload: true,
    runtimeCaching: defaultCache,
});

const firebaseConfig = {
    apiKey: "AIzaSyAvXfr-sgPsvNhkVSP1A1tKVCDIINV2av4",
    authDomain: "pwa-test-push-5d707.firebaseapp.com",
    projectId: "pwa-test-push-5d707",
    storageBucket: "pwa-test-push-5d707.appspot.com",
    messagingSenderId: "275131161219",
    appId: "1:275131161219:web:d2bbc4e512530b5d5459b6",
    measurementId: "G-9QEZXDM2F5"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('push', event => {
	const data = event.data ? event.data : { title: 'Fallback title', body: 'Fallback message' };
	console.log('Event TEST', event)
	const title = data.title;
	const options = {
		body: data.body,
		// Other notification options you might want to use
	};
	event.waitUntil(
		self.registration.showNotification(title, options)
	);
});