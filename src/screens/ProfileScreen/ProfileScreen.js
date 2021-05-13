import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Avatar, Divider, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/actions';
import UserJobs from '../../components/UserJobs';
import { AntDesign } from 'react-native-vector-icons';

const ProfileScreen = (props) => {
	const user = useSelector((state) => state.users);
	const dispatch = useDispatch();
	console.log(props);
	console.log(user);

	const handleOut = (e) => {
		e.preventDefault();
		dispatch(signOut());
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Avatar
					size="large"
					rounded
					source={{
						uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					}}
				/>
				<View style={styles.headerTitleContainer}>
					<Text style={styles.headerTitle}>{user.user.username}</Text>
					<Text style={styles.headerTitle}>{user.user.email}</Text>
					<TouchableOpacity>
						<Text style={styles.edit}>Edit</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.midContainer}>
				<Divider />
				<View style={styles.divider}>
					<Text>Jobs Created: {user.posts.length}</Text>
				</View>
				<Divider />
			</View>
			{/* <View style={styles.flatlist}> */}
			<UserJobs />
			{/* </View> */}
			<View
				style={{
					alignItems: 'center',
					marginBottom: 15,
					marginTop: 10,
				}}>
				<Button
					raised
					icon={<AntDesign name="logout" size={20} color="white" />}
					iconRight
					title="Log Out    "
					onPress={(e) => handleOut(e)}
				/>
			</View>
		</View>
	);
};
export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	headerContainer: {
		alignItems: 'center',
		margin: 20,
	},
	headerTitleContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 0,
	},
	headerTitle: {
		fontSize: 16,
	},
	edit: {
		margin: 0,
		color: 'orange',
		fontSize: 12,
	},
	midContainer: {},
	divider: {
		margin: 20,
		alignItems: 'center',
		zIndex: 99999,
	},
});
