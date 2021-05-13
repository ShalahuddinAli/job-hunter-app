import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import JobsList from '../components/JobsList';

const MainScreen = ({ navigation }) => {
	const jobs = useSelector((state) => state.jobs.jobs);
	const job = useSelector((state) => state.jobs.job);

	useEffect(() => {
		console.log('blowjob');
	}, [job]);

	return (
		<>
			<SafeAreaView>
				<SearchBar />
			</SafeAreaView>
			<JobsList jobs={jobs} navigation={navigation} />
		</>
	);
};
export default MainScreen;
