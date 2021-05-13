import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from '../../firebase/config';
import MainScreen from '../MainScreen/MainScreen';
import AddJobScreen from '../AddJobScreen/AddJobScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions';

const Tab = createMaterialBottomTabNavigator();

const MyTab = ({ navigation }) => {
	const user = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getJobs());
	}, []);

	return (
		<>
			<Tab.Navigator
				initialRouteName="Main"
				// labeled={false}
				barStyle={{ backgroundColor: '#2ba5d7' }}>
				<Tab.Screen
					name="Main"
					component={MainScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="home" color={color} size={26} />
						),
					}}
				/>

				<Tab.Screen
					name="Add Job"
					component={AddJobScreen}
					listeners={({ navigation }) => ({
						tabPress: (event) => {
							event.preventDefault();
							navigation.navigate('New Job');
						},
					})}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="plus-box" color={color} size={26} />
						),
					}}
				/>
				<Tab.Screen
					name="ProfileScreen"
					component={ProfileScreen}
					listeners={({ navigation }) => ({
						tabPress: (event) => {
							event.preventDefault();
							navigation.navigate('Profile', {
								uid: firebase.auth().currentUser.uid,
							});
						},
					})}
					options={{
						tabBarLabel: 'Profile',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="account-circle"
								color={color}
								size={26}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
};

export default MyTab;
