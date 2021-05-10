import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

const AddJobScreen = () => {
	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<TextInput
					style={styles.input}
					placeholder="Job Title"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => console.log(text)}
					value={jobTitle}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					placeholder="Descriptions"
					onChangeText={(text) => console.log(text)}
					value={Descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					placeholder="Start Date"
					onChangeText={(text) => console.log(text)}
					value={Descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					placeholder="End State"
					onChangeText={(text) => console.log(text)}
					value={Descriptions}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
					<Text style={styles.buttonTitle}>Post It!</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
		</View>
	);
};
export default AddJobScreen;
