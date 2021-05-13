import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from '../firebase/config';
import MainScreen from './MainScreen';
import AddJobScreen from './AddJobScreen';
import ProfileScreen from './ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../redux/actions/index';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	formContainer: {
		flexDirection: 'row',
		height: 80,
		marginTop: 40,
		marginBottom: 20,
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		paddingLeft: 16,
		flex: 1,
		marginRight: 5,
	},
	button: {
		height: 47,
		borderRadius: 5,
		backgroundColor: '#788eec',
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
	listContainer: {
		marginTop: 20,
		padding: 20,
	},
	entityContainer: {
		marginTop: 16,
		borderBottomColor: '#cccccc',
		borderBottomWidth: 1,
		paddingBottom: 16,
	},
	entityText: {
		fontSize: 20,
		color: '#333333',
	},
});
