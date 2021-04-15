// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDu-V1EN_y6wEw_34aUQZlRtrDFu2GjClk',
  authDomain: 'medflix-a0b4d.firebaseapp.com',
  databaseURL:
    'https://medflix-a0b4d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'medflix-a0b4d',
  storageBucket: 'medflix-a0b4d.appspot.com',
  messagingSenderId: '280414189458',
  appId: '1:280414189458:web:741848cdcc0901bfc9b34b',
  measurementId: 'G-83K1DNT03T',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
