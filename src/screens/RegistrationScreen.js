import React, { useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions/index';

const RegistrationScreen = ({ navigation }) => {
	const [newUserInfo, setNewUserInfo] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { username, email, password, confirmPassword } = newUserInfo;
	const dispatch = useDispatch();

	const onFooterLinkPress = () => {
		navigation.navigate('Login');
	};

	const handleSubmit = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match.");
			return;
		}
		dispatch(signUp(email, password, username));
	};
	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<Image
					style={styles.logo}
					source={require('../../assets/Registeration.gif')}
				/>
				<TextInput
					style={styles.input}
					placeholder="Username"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) =>
						setNewUserInfo({ ...newUserInfo, username: text })
					}
					value={username}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) =>
						setNewUserInfo({ ...newUserInfo, email: text })
					}
					value={email}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>

				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Password"
					onChangeText={(text) =>
						setNewUserInfo({ ...newUserInfo, password: text })
					}
					value={password}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>

				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Confirm Password"
					onChangeText={(text) =>
						setNewUserInfo({ ...newUserInfo, confirmPassword: text })
					}
					value={confirmPassword}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={(e) => handleSubmit(e)}>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							{' '}
							Log in
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	logo: {
		flex: 1,
		height: 200,
		width: 200,
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
		color: '#070414',
	},
	footerLink: {
		color: '#da1d4e',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
