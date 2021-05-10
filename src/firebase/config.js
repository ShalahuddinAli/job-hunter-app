// import * as firebase from 'firebase';
import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAWao61sAAo4QXoiiaSTOvotqoVPbcmmd0',
	authDomain: 'project4-job.firebaseapp.com',
	projectId: 'project4-job',
	storageBucket: 'project4-job.appspot.com',
	messagingSenderId: '566142696267',
	appId: '1:566142696267:web:1e4f078cc0916ec5d8c6ce',
	measurementId: 'G-6106EP4F8X',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
