import React from 'react';
import {
	FlatList,
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, getJob } from '../redux/actions/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const JobsList = ({ jobs, navigation }) => {
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.users.user.id);

	console.log(navigation);

	const handleDelete = (e, jobId) => {
		e.preventDefault();
		dispatch(deleteJob(jobId));
	};

	const handleUpdate = (e, jobDetails) => {
		e.preventDefault();
		navigation.navigate('New Job');
		dispatch(getJob(jobDetails));
	};

	const handlePress = (jobDetails) => {
		navigation.navigate('Job Details');
		dispatch(getJob(jobDetails));
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
				containerStyle={{ margin: 10, borderRadius: 10, height: 150 }}
				onPress={() => handlePress(item)}>
				<ListItem.Content style={styles.cardContainer}>
					<ListItem.Title style={styles.card}>{item.jobTitle}</ListItem.Title>
					<ListItem.Subtitle style={styles.card}>${item.pay}</ListItem.Subtitle>
					<ListItem.Subtitle style={styles.cardlast}>
						{createdDuration(item.createdOn)}
					</ListItem.Subtitle>
				</ListItem.Content>
				{userId == item.createdBy && (
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={(e) => handleUpdate(e, item)}>
							<MaterialCommunityIcons
								name="square-edit-outline"
								size={20}
								color="lime"
							/>
							<Text title="Edit"></Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={(e) => handleDelete(e, item.id)}>
							<MaterialCommunityIcons
								name="delete-forever-outline"
								size={22}
								color="red"
							/>
							<Text title="Delete"></Text>
						</TouchableOpacity>
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

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		top: 55,
	},
	button: {
		margin: 2,
	},
	cardContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	card: {
		marginBottom: 15,
		marginLeft: 20,
	},
	cardlast: {
		marginTop: 15,
		marginLeft: 23,
		fontSize: 12,
	},
});
