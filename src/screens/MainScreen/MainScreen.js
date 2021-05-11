import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const MainScreen = () => {
	const jobs = useSelector((state) => state.jobs.jobs);
	console.log(jobs);

	const keyExtractor = (item, index) => index.toString();
	const renderItem = ({ item }) => (
		<ListItem containerStyle={{ margin: 10, borderRadius: 20, height: 150 }}>
			<ListItem.Content>
				<ListItem.Title>{item.jobTitle}</ListItem.Title>
				<ListItem.Subtitle>{item.pay}</ListItem.Subtitle>
				<ListItem.Subtitle>{JSON.stringify(item.createdOn)}</ListItem.Subtitle>
				{console.log(
					moment
						.unix(JSON.stringify(item.createdOn.seconds))
						.format('YYYY-MM-DD')
				)}
				{console.log(JSON.stringify(item.createdOn.seconds))}
			</ListItem.Content>
			<ListItem.Chevron />
		</ListItem>
	);

	return (
		<>
			<SafeAreaView>
				<SearchBar
					containerStyle={{ padding: 0, margin: 30 }}
					inputContainerStyle={{ borderRadius: 50, padding: 0, margin: 0 }}
					placeholder="Search Job Title"
					lightTheme
					round
					showLoading
				/>
			</SafeAreaView>
			<FlatList
				keyExtractor={keyExtractor}
				data={jobs}
				renderItem={renderItem}
			/>
		</>
	);
};
export default MainScreen;
