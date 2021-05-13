import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import JobsList from '../../components/JobsList';

const MainScreen = () => {
	const jobs = useSelector((state) => state.jobs.jobs);

	return (
		<>
			<SafeAreaView>
				<SearchBar />
			</SafeAreaView>
			<JobsList jobs={jobs} />
		</>
	);
};
export default MainScreen;
