import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import JobsScreen from '../JobsScreen/JobsScreen';
import AddJobScreen from '../AddJobScreen/AddJobScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions';

const Tab = createMaterialBottomTabNavigator();

const MainScreen = ({ navigation }) => {
	const user = useSelector((state) => state);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getJobs());
	// }, []);

	console.log(user);
	return (
		<>
			<SafeAreaView>
				<Text>Hello</Text>
			</SafeAreaView>
			<Tab.Navigator initialRouteName="Jobs" labeled={false}>
				<Tab.Screen
					name="Jobs"
					component={JobsScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="home" color={color} size={26} />
						),
					}}
				/>

				<Tab.Screen
					name="AddJob"
					component={AddJobScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="plus-box" color={color} size={26} />
						),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
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

export default MainScreen;
