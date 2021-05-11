import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
	);
};
export default ProfileScreen;

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
