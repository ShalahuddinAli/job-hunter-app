import { CLEAR_JOB, CLEAR_JOBS, GET_JOBS, GET_JOB_DETAILS } from '../constants';

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
		case CLEAR_JOBS:
			return { jobs: [], job: '' };
		case GET_JOB_DETAILS:
			return {
				...state,
				job: payload,
			};
		case CLEAR_JOB:
			return {
				...state,
				job: '',
			};
		default:
			return state;
	}
};

export default jobs;
