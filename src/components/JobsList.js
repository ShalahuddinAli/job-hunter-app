import React from 'react';
import { FlatList, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, getJob } from '../redux/actions/index';

const JobsList = ({ jobs, navigation }) => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.users.user.id);

	const handleDelete = (e, jobId) => {
		e.preventDefault();
		dispatch(deleteJob(jobId));
	};

	const handlePress = (jobDetails) => {
		dispatch(getJob(jobDetails));
		navigation.navigate('Job Details');
	};

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

	const renderItem = ({ item }) => {
		return (
			<ListItem
				containerStyle={{ margin: 10, borderRadius: 20, height: 150 }}
				onPress={() => handlePress(item)}>
				<ListItem.Content>
					<ListItem.Title>{item.jobTitle}</ListItem.Title>
					<ListItem.Subtitle>{item.pay}</ListItem.Subtitle>
					<ListItem.Subtitle>
						{createdDuration(item.createdOn)}
					</ListItem.Subtitle>
				</ListItem.Content>
				{userId == item.createdBy && (
					<View>
						<Button title="Edit" />
						<Button title="Delete" onPress={(e) => handleDelete(e, item.id)} />
					</View>
				)}
			</ListItem>
		);
	};

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
