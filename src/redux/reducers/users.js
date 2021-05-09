import {
	USER_CURRENT_STATE,
	USER_NO_STATE,
	USER_STATE_ERROR,
} from '../constants';

const initialState = {
	loading: true,
	user: null,
	posts: [],
};

const user = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
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
		default:
			return state;
	}
};

export default user;
