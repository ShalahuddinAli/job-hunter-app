import React, { useEffect, useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { filteredJobs } from '../redux/actions';

const Search = () => {
	const [search, setSearch] = useState('');

	const dispatch = useDispatch();
	const allJobs = useSelector((state) => state.jobs.jobs);
	console.log(allJobs);

	useEffect(() => {
		// Check if searched text is not blank
		if (search) {
			// Inserted text is not blank
			// Filter the allJobs
			const newData = allJobs.filter((item) => {
				const itemData = item.jobTitle
					? item.jobTitle.toUpperCase()
					: ''.toUpperCase();
				const textData = search.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			dispatch(filteredJobs(newData));
			setSearch(search);
		} else {
			// Inserted text is blank
			dispatch(filteredJobs(allJobs));
			setSearch(search);
		}
	}, [allJobs, search]);

	return (
		<>
			<SearchBar
				containerStyle={{
					padding: 0,
					margin: 20,
					backgroundColor: '#f3f2f0',
					borderRadius: 50,
				}}
				inputContainerStyle={{ padding: 0, margin: 0, borderRadius: 50 }}
				placeholder="Search Job Title"
				searchIcon={{ size: 24 }}
				inputStyle={{ color: 'black' }}
				lightTheme
				value={search}
				onChangeText={(text) => setSearch(text)}
				onClear={() => setSearch('')}
			/>
		</>
	);
};

export default Search;
