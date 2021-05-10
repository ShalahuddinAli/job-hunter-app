import {
	SIGN_UP,
	SIGN_IN,
	USER_CURRENT_STATE,
	USER_NO_STATE,
	USER_STATE_ERROR,
	GET_USER_JOBS,
} from '../constants';

const initialState = {
	loading: true,
	user: null,
	posts: [],
};

const users = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SIGN_UP:
		case SIGN_IN:
		case USER_CURRENT_STATE:
			return {
				...state,
				loading: payload.loading,
				user: payload.user,
			};
		case USER_NO_STATE:
		case USER_STATE_ERROR:
			return {
				...state,
				loading: payload,
			};
		case GET_USER_JOBS:
			return {
				...state,
				posts: payload,
			};
		default:
			return state;
	}
};

export default users;
