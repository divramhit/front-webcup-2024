// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// const firebaseConfig = {
//     apiKey: "AIzaSyAvXfr-sgPsvNhkVSP1A1tKVCDIINV2av4",
//     authDomain: "pwa-test-push-5d707.firebaseapp.com",
//     projectId: "pwa-test-push-5d707",
//     storageBucket: "pwa-test-push-5d707.appspot.com",
//     messagingSenderId: "275131161219",
//     appId: "1:275131161219:web:d2bbc4e512530b5d5459b6",
//     measurementId: "G-9QEZXDM2F5"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log(
//         '[firebase-messaging-sw.js] Received background message ',
//         payload
//     );
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };
  
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
