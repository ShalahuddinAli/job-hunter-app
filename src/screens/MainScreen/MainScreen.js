import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase';
import { ProfileScreen, AddJobScreen, JobsScreen } from '..';

const Tab = createMaterialBottomTabNavigator();

const MainScreen = ({ navigation }) => {
	return (
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
	);
};

export default MainScreen;
