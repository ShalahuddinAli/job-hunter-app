import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const MainScreen = () => {
	const jobs = useSelector((state) => state.jobs.jobs);
	console.log(jobs);

	const ngodeng = (unix) => {
		// unixt to full date
		const momentDate = moment.unix(unix.seconds);
		// const mom = moment();
		// arg -> in string -> return -> aarray
		// "2020-05-29" -> 2020,05,29
		const convertedDate = momentDate.format('YYYY, M, DD, H, m');

		const arrConvertedDate = convertedDate.split(',');
		// console.log(mom);

		// ISO-8601 formatted date returned from sever
		//var utcDate = '2011-06-29T16:52:48.000Z';

		// console.log(convertedDate, convertedDate2, momentDate);

		// const convertedDate = ['2021', '4', '11'];
		// console.log(arrConvertedDate);
		// console.log(arrConvertedDate);

		const createdToNow = moment(arrConvertedDate)
			.subtract(1, 'months')
			.fromNow();

		console.log(convertedDate, createdToNow);

		return createdToNow;

		// console.log(convertedDate, createdToNow);
		// moment([
		//      moment
		//           .unix(JSON.stringify(item.createdOn.seconds))
		//           .format('YYYY-MM-DD'),
		// ]).toNow()
	};

	const keyExtractor = (item, index) => index.toString();
	const renderItem = ({ item }) => (
		<ListItem containerStyle={{ margin: 10, borderRadius: 20, height: 150 }}>
			<ListItem.Content>
				<ListItem.Title>{item.jobTitle}</ListItem.Title>
				<ListItem.Subtitle>{item.pay}</ListItem.Subtitle>
				<ListItem.Subtitle>{ngodeng(item.createdOn)}</ListItem.Subtitle>
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
