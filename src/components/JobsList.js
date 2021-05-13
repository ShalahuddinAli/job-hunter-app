import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import moment from 'moment';

const JobsList = ({ jobs }) => {
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
			<FlatList
				keyExtractor={keyExtractor}
				data={jobs}
				renderItem={renderItem}
			/>
		</>
	);
};

export default JobsList;
