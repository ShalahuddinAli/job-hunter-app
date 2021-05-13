import React from 'react';
import { SearchBar } from 'react-native-elements';

const Search = () => {
	return (
		<>
			<SearchBar
				containerStyle={{ padding: 0, margin: 20 }}
				inputContainerStyle={{ borderRadius: 50, padding: 0, margin: 0 }}
				placeholder="Search Job Title"
				lightTheme
				round
				showLoading
			/>
		</>
	);
};

export default Search;
