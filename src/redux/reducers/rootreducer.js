import { combineReducers } from 'redux';

import jobs from './jobs';
import users from './users';

export default combineReducers({ jobs, users });
