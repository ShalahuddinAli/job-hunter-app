import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { decode, encode } from 'base-64';
import { useSelector, useDispatch } from 'react-redux';
import { userCurrentState } from './src/redux/actions';
import MyTab from './src/screens/MyTab';
import AddJobScreen from './src/screens/AddJobScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import JobDetailsScreen from './src/screens/JobDetailsScreen';
import AddImageScreen from './src/screens/AddImageScreen';

import { HeaderBackButton } from '@react-navigation/stack';

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

	useEffect(() => {
		dispatch(userCurrentState());
	}, []);

	if (loading) {
		return <></>;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{user ? (
					<>
						<Stack.Screen
							name="Home"
							component={MyTab}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="New Job"
							component={AddJobScreen}
							options={{
								headerStyle: {
									backgroundColor: '#2ba5d7',
								},
								headerTitleStyle: {
									fontWeight: 'bold',
									color: '#070414',
								},
								// headerTintColor: {
								// 	fontWeight: 'bold',
								// 	color: '#070414',
								// },
							}}
						/>
						<Stack.Screen
							name="Profile"
							component={ProfileScreen}
							options={{
								headerStyle: {
									backgroundColor: '#2ba5d7',
								},
								headerTitleStyle: {
									fontWeight: 'bold',
									color: '#070414',
								},
								// headerTintColor: {
								// 	fontWeight: 'bold',
								// 	color: '#070414',
								// },
							}}
						/>
						<Stack.Screen
							name="Job Details"
							component={JobDetailsScreen}
							options={{
								headerStyle: {
									backgroundColor: '#2ba5d7',
								},
								headerTitleStyle: {
									fontWeight: 'bold',
									color: '#070414',
								},
								// headerTintColor: {
								// 	fontWeight: 'bold',
								// 	color: '#070414',
								// },
							}}
						/>
						<Stack.Screen name="Add" component={AddImageScreen} />
					</>
				) : (
					<>
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{
								headerStyle: {
									backgroundColor: '#2ba5d7',
								},
								headerTitleStyle: {
									fontWeight: 'bold',
									color: '#070414',
								},
							}}
						/>
						<Stack.Screen
							name="Registration"
							component={RegistrationScreen}
							options={{
								headerStyle: {
									backgroundColor: '#2ba5d7',
								},
								headerTitleStyle: {
									fontWeight: 'bold',
									color: '#070414',
								},
								// headerTintColor: {
								// 	fontWeight: 'bold',
								// 	color: '#070414',
								// },
							}}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default WrappedApp;
