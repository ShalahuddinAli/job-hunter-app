import { firebase } from '../../firebase/config';
import {
	USER_CURRENT_STATE,
	USER_NO_STATE,
	USER_STATE_ERROR,
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
