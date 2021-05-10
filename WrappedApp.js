import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';
import { useSelector, useDispatch } from 'react-redux';
import { userCurrentState } from './src/redux/actions';
import MainScreen from './src/screens/MainScreen/MainScreen';
import AddJobScreen from './src/screens/AddJobScreen/AddJobScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

if (!global.btoa) {
	global.btoa = encode;
}
if (!global.atob) {
	global.atob = decode;
}
const WrappedApp = () => {
	const Stack = createStackNavigator();
	const dispatch = useDispatch();
	const userStatus = useSelector((state) => state.users);

	const { loading, user } = userStatus;
	console.log(userStatus);
	useEffect(() => {
		dispatch(userCurrentState());
	}, [dispatch]);

	if (loading) {
		return <></>;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{user ? (
					<>
						<Stack.Screen
							name="Main"
							component={MainScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="AddJob" component={AddJobScreen} />
						<Stack.Screen name="Profile" component={ProfileScreen} />
					</>
				) : (
					<>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Registration" component={RegistrationScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default WrappedApp;
