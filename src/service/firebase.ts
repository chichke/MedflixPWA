import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';

const vapidKey =
  'BEn5sZUgguVum0ZMp1NIVFUIzrF56Ri8oVcdMxWnaZcKF_lxDKYUsezgbpUkovJyxCvnZFMk74GI9KL_CoPpRjc';

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

const app = firebase.initializeApp(firebaseConfig);

export const onMessageListener = () =>
  new Promise((resolve) => {
    app.messaging().onMessage((payload) => {
      resolve(payload);
    });
  });

export const getToken = (setTokenFound: Function) => {
  return app
    .messaging()
    .getToken({ vapidKey: vapidKey })
    .then(async (currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);

        // TODO SEND TO BACK END
        // await firebase
        //   .database()
        //   .ref('/user')
        //   .child('pushToken')
        //   .set(currentToken)

        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
};
