import { GET_JOBS } from '../constants';

const initialState = {
	jobs: [],
	job: '',
};

const jobs = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_JOBS:
			return {
				...state,
				jobs: payload,
			};
		default:
			return state;
	}
};

export default jobs;
