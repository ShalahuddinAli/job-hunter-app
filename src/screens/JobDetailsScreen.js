import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import moment from 'moment';

const JobDetailsScreen = () => {
	const job = useSelector((state) => state.jobs.job);
	console.log(job);

	const datePosted = (unix) => {
		return moment.unix(unix.seconds).format('d-MMM-YY');
	};
	return (
		<View>
			<Card>
				<Card.Title>{job.jobTitle}</Card.Title>
				<Card.Divider />
				<View style={styles.user}>
					<Text style={styles.name}>{job.pay}</Text>
				</View>
				<View style={styles.user}>
					<Text style={styles.name}>${job.pay}</Text>
				</View>
				<View style={styles.user}>
					<Text style={styles.name}>Posted on {datePosted(job.createdOn)}</Text>
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
			<View>
				<Text>{job.descriptions}</Text>
			</View>
		</View>
	);
};

export default JobDetailsScreen;

const styles = StyleSheet.create({});
