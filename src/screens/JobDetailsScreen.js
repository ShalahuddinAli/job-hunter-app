import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { clearJob } from '../redux/actions';
import { HeaderBackButton } from '@react-navigation/stack';

const JobDetailsScreen = ({ navigation }) => {
	const job = useSelector((state) => state.jobs.job);
	const dispatch = useDispatch();
	console.log(job);

	const datePosted = (unix) => {
		console.log('hit me');
		return moment.unix(unix?.seconds).format('D-MMM-YY');
	};

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<HeaderBackButton
					onPress={() => {
						navigation.goBack();
						// to be rectify,
						dispatch(clearJob());
					}}
				/>
			),
		});
	}, [navigation]);

	return (
		<View>
			<Card style={styles.card}>
				<Card.Title>{job.jobTitle}</Card.Title>
				<Card.Divider />
				<View style={styles.desc}>
					<Text>{job.descriptions}</Text>
				</View>
				<View style={styles.pay}>
					<Text>${job.pay}</Text>
				</View>
				<View style={styles.postedOn}>
					<Text>Posted on {datePosted(job.createdOn)}</Text>
				</View>
				<Button
					buttonStyle={{
						borderRadius: 0,
						marginLeft: 0,
						marginRight: 0,
						marginBottom: 0,
						marginTop: 20,
					}}
					title="Chat Now(coming soon)"
				/>
			</Card>
		</View>
	);
};

export default JobDetailsScreen;

const styles = StyleSheet.create({
	card: {},
	desc: {
		margin: 10,
	},
	pay: {
		margin: 10,
	},
	postedOn: {
		marginTop: 20,
		marginLeft: 10,
	},
});
