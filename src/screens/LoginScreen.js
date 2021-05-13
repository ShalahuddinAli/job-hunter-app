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
import { signIn } from '../redux/actions';

const LoginScreen = ({ navigation }) => {
	const [userCredential, setUserCredential] = useState({
		email: '',
		password: '',
	});
	const { email, password } = userCredential;
	const dispatch = useDispatch();

	const onFooterLinkPress = () => {
		navigation.navigate('Registration');
	};

	const onLoginPress = () => {
		dispatch(signIn(email, password));
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<Image style={styles.logo} source={require('../../assets/Login.gif')} />
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) =>
						setUserCredential({ ...userCredential, email: text })
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
						setUserCredential({ ...userCredential, password: text })
					}
					value={password}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
					<Text style={styles.buttonTitle}>Log in</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Don't have an account?
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							{' '}
							Sign up
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	logo: {
		flex: 1,
		height: 300,
		width: 300,
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
