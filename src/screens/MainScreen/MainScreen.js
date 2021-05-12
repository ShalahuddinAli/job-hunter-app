import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const MainScreen = () => {
	const jobs = useSelector((state) => state.jobs.jobs);
	console.log(jobs);

	const createdDuration = (unix) => {
		// unixt to full date
		const momentDate = moment.unix(unix.seconds);
		// arg -> in string -> return -> aarray
		// "2020-05-29" -> 2020,05,29
		const convertedDate = momentDate.format('YYYY, M, DD, H, m');

		const arrConvertedDate = convertedDate.split(',');

		const createdToNow = moment(arrConvertedDate)
			.subtract(1, 'months') //in arr format, mth start from '0'
			.fromNow();

		return createdToNow;
	};

	const keyExtractor = (item, index) => index.toString();

	const renderItem = ({ item }) => (
		<ListItem containerStyle={{ margin: 10, borderRadius: 20, height: 150 }}>
			<ListItem.Content>
				<ListItem.Title>{item.jobTitle}</ListItem.Title>
				<ListItem.Subtitle>{item.pay}</ListItem.Subtitle>
				<ListItem.Subtitle>{createdDuration(item.createdOn)}</ListItem.Subtitle>
			</ListItem.Content>
			<ListItem.Chevron />
		</ListItem>
	);

	return (
		<>
			<SafeAreaView>
				<SearchBar
					containerStyle={{ padding: 0, margin: 20 }}
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
