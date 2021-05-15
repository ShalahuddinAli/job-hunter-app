import React, { useState, useEffect } from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { addJob, clearJob, updateJob } from '../redux/actions/index';
import { useSelector } from 'react-redux';

const AddJobScreen = ({ navigation }) => {
	const job = useSelector((state) => state.jobs.job);
	const dispatch = useDispatch();
	const [newJobData, setNewJobData] = useState({
		jobTitle: job.id ? job.jobTitle : '',
		descriptions: job.id ? job.descriptions : '',
		pay: job.id ? job.pay : '',
	});
	const { jobTitle, descriptions, pay } = newJobData;

	//for inbuilt back button at the top
	useEffect(() => {
		navigation.addListener('beforeRemove', (e) => {
			navigation.dispatch(e.data.action);
			dispatch(clearJob());
		});
	}, [navigation]);

	const handleSubmit = (e) => {
		// check for empty fileds
		if (pay === '' || descriptions === '' || jobTitle === '') {
			return alert('please enter something');
		}
		//  check if data changed. if no change, dont request. very expensive
		if (
			job.pay === pay &&
			job.descriptions === descriptions &&
			job.jobTitle === jobTitle
		) {
			return alert('please enter something exciting');
		}

		e.preventDefault();
		job.id
			? dispatch(updateJob(job.id, jobTitle, descriptions, pay, navigation))
			: dispatch(addJob(jobTitle, descriptions, pay, navigation));
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<TextInput
					required={true}
					style={styles.input}
					placeholder="Job Title"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) =>
						setNewJobData({ ...newJobData, jobTitle: text })
					}
					value={jobTitle}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<TextInput
					required={true}
					style={styles.description}
					placeholderTextColor="#aaaaaa"
					placeholder="Descriptions"
					onChangeText={(text) =>
						setNewJobData({ ...newJobData, descriptions: text })
					}
					multiline
					value={descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<TextInput
					required={true}
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					placeholder="Pay"
					onChangeText={(text) => setNewJobData({ ...newJobData, pay: text })}
					value={pay}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={(e) => handleSubmit(e)}>
					<Text style={styles.buttonTitle}>
						{job.id ? 'Update' : 'Post It!'}
					</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
		</View>
	);
};
export default AddJobScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		top: '10%',
	},
	title: {},
	logo: {
		flex: 1,
		height: 120,
		width: 90,
		alignSelf: 'center',
		margin: 30,
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
	},
	description: {
		height: 250,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
	},
	button: {
		backgroundColor: '#2ba5d7',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 48,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTitle: {
		color: '#f3f2f0',
		fontSize: 16,
		fontWeight: 'bold',
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
	},
	footerText: {
		fontSize: 16,
		color: '#2e2e2d',
	},
	footerLink: {
		color: '#788eec',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
