import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import UserJobs from '../../components/UserJobs';
import { signOut } from '../../redux/actions';

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
		<>
			<View>
				<Text>{user.user.username}</Text>
			</View>
			<View
				style={{
					flex: 2,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<View>
					<Text>Jobs Created: {user.posts.length}</Text>
				</View>
				<View>
					<Text>Email: {user.user.email}</Text>
				</View>
			</View>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity onPress={(e) => handleOut(e)}>
					<Text>Logout</Text>
				</TouchableOpacity>
			</View>
		</>
		// <View>
		// 	<View>
		// 		<Avatar
		// 			source={require('../../../assets/splash.png')}
		// 			size="giant"
		// 			style={{ width: 100, height: 100 }}
		// 		/>
		// 		<Text category="h6">Test User</Text>
		// 	</View>
		// 	<View>
		// 		<View>
		// 			<Text category="s1">{user.posts.length}</Text>
		// 			<Text appearance="hint" category="s2">
		// 				Job Posts
		// 			</Text>
		// 		</View>
		// 		<View>
		// 			<Text category="s1">0</Text>
		// 			<Text appearance="hint" category="s2">
		// 				Following
		// 			</Text>
		// 		</View>
		// 	</View>
		// 	<View>
		// 		<Button title="LOGOUT" onPress={(e) => handleOut(e)} />
		// 		<View />
		// 		<Button title="MESSAGE" />
		// 	</View>
		// 	<UserJobs />
		// </View>
	);
};
export default ProfileScreen;

{
	/* <View>
	<View>
		<Avatar
			source={require('../../../assets/splash.png')}
			size="giant"
			style={{ width: 100, height: 100 }}
		/>
		<Text category="h6">Test User</Text>
	</View>
	<View>
		<View>
			<Text category="s1">{user.posts.length}</Text>
			<Text appearance="hint" category="s2">
				Job Posts
			</Text>
		</View>
		<View>
			<Text category="s1">0</Text>
			<Text appearance="hint" category="s2">
				Following
			</Text>
		</View>
	</View>
	<View>
		<Button appearance="ghost" status="danger" onPress={(e) => handleOut(e)}>
			LOGOUT
		</Button>
		<View />
		<Button appearance="ghost" status="danger">
			MESSAGE
		</Button>
	</View>
	<Gallery />
</View>; */
}

// import React, {useState} from 'react';
// import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export const ProfileScreen = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };
