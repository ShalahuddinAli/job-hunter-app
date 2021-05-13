import React from 'react';
import { useSelector } from 'react-redux';
import JobsList from './JobsList';

const UserJobs = ({ navigation }) => {
	const jobs = useSelector((state) => state.users.posts);
	// console.log(jobs);
	return (
		<>
			<JobsList jobs={jobs} navigation={navigation} />
		</>
	);
};

export default UserJobs;
