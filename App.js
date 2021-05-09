import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
	LoginScreen,
	MainScreen,
	RegistrationScreen,
	AddJobScreen,
	ProfileScreen,
} from './src/screens';
import { firebase } from './src/firebase/config';
import { decode, encode } from 'base-64';
import store from './src/redux/store';

if (!global.btoa) {
	global.btoa = encode;
}
if (!global.atob) {
	global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const usersRef = firebase.firestore().collection('users');
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				usersRef
					.doc(user.uid)
					.get()
					.then((document) => {
						const userData = document.data();
						setLoading(false);
						setUser(userData);
					})
					.catch((error) => {
						setLoading(false);
					});
			} else {
				setLoading(false);
			}
		});
	}, []);

	if (loading) {
		return <></>;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{user ? (
					<Provider store={store}>
						<Stack.Screen
							name="Main"
							component={MainScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="AddJob" component={AddJobScreen} />
						<Stack.Screen name="Profile" component={ProfileScreen} />
					</Provider>
				) : (
					<>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Registration" component={RegistrationScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
