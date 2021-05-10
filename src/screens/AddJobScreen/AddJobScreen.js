import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const AddJobScreen = ({ navigation }) => {
	const [newJobData, setNewJobData] = useState({
		jobTitle: '',
		descriptions: '',
	});
	const { jobTitle, descriptions } = newJobData;
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<TextInput
					style={styles.input}
					placeholder="Job Title"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => console.log(text)}
					value={jobTitle}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.description}
					placeholderTextColor="#aaaaaa"
					placeholder="Descriptions"
					onChangeText={(text) => console.log(text)}
					multiline
					value={descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					placeholder="Start Date"
					onChangeText={(text) => console.log(text)}
					value={descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					placeholder="End State"
					onChangeText={(text) => console.log(text)}
					value={descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
					<Text style={styles.buttonTitle}>Post It!</Text>
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
		backgroundColor: '#788eec',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 48,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTitle: {
		color: 'white',
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
