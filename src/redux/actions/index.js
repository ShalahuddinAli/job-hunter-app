import { firebase } from '../../firebase/config';
import {
	SIGN_IN,
	SIGN_UP,
	USER_CURRENT_STATE,
	USER_NO_STATE,
	USER_STATE_ERROR,
	GET_JOBS,
} from '../constants';

export const userCurrentState = () => {
	return (dispatch) => {
		const usersRef = firebase.firestore().collection('users');
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				usersRef
					.doc(user.uid)
					.get()
					.then((document) => {
						const userData = document.data();
						dispatch({
							type: USER_CURRENT_STATE,
							payload: { user: userData, loading: false },
						});
					})
					.catch((error) => {
						dispatch({ type: USER_STATE_ERROR, payload: false });
					});
			} else {
				dispatch({ type: USER_NO_STATE, payload: false });
			}
		});
	};
};

export const signUp = (email, password, username, navigation) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				const uid = res.user.uid;
				const data = {
					id: uid,
					email,
					username,
				};
				const usersRef = firebase.firestore().collection('users');
				usersRef
					.doc(uid)
					.set(data)
					.then(() => {
						dispatch({
							type: SIGN_UP,
							payload: { user: data, loading: false },
						});
					})
					.catch((error) => {
						alert(error);
					});
			})
			.catch((error) => {
				alert(error);
			});
	};
};

export const signIn = (email, password, navigation) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				const uid = res.user.uid;
				const usersRef = firebase.firestore().collection('users');
				usersRef
					.doc(uid)
					.get()
					.then((doc) => {
						if (!doc.exists) {
							alert('User does not exist anymore.');
							return;
						}
						const user = doc.data();
						dispatch({
							type: SIGN_IN,
							payload: { user: user, loading: false },
						});
					})
					.catch((error) => {
						alert(error);
					});
			})
			.catch((error) => {
				alert(error);
			});
	};
};

// export const getJobs = () => {
// 	return (dispatch) => {
// 		firebase
// 			.auth()
// 			.signInWithEmailAndPassword(email, password)
// 			.then((res) => {
// 				const uid = res.user.uid;
// 				const usersRef = firebase.firestore().collection('users');
// 				usersRef
// 					.doc(uid)
// 					.get()
// 					.then((doc) => {
// 						if (!doc.exists) {
// 							alert('User does not exist anymore.');
// 							return;
// 						}
// 						const user = doc.data();
// 						dispatch({
// 							type: GET_JOBS,
// 							payload: { user: user, loading: false },
// 						});
// 					})
// 					.catch((error) => {
// 						alert(error);
// 					});
// 			})
// 			.catch((error) => {
// 				alert(error);
// 			});
// 	};
// };
