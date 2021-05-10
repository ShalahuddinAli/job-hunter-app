import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { signUp } from '../../redux/actions';

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
		dispatch(signUp(email, password, username, navigation));
	};
	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<Image
					style={styles.logo}
					source={require('../../../assets/icon.png')}
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
							Log in
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};

export default RegistrationScreen;
