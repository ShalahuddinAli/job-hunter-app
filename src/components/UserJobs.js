import React from 'react';
import { useSelector } from 'react-redux';
import JobsList from './JobsList';

const UserJobs = () => {
	const jobs = useSelector((state) => state.users.posts);
	console.log(jobs);
	return (
		<>
			<JobsList jobs={jobs} />
		</>
	);
};

export default UserJobs;
