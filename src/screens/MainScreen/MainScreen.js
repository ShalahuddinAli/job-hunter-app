import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

const MainScreen = () => {
	const jobs = useSelector((state) => state.jobs.jobs);
	console.log(jobs);

	return (
		<>
			<SafeAreaView>
				<SearchBar
					containerStyle={{ padding: 0, margin: 30 }}
					inputContainerStyle={{ borderRadius: 50, padding: 0, margin: 0 }}
					placeholder="Search Job Title"
					lightTheme
					round
					showLoading
				/>
			</SafeAreaView>
			{jobs.map((job, index) => (
				<TouchableOpacity
					Style={{ margin: 10, height: 150, borderRadius: 20 }}
					key={index}>
					<View>
						<Text style={{ marginBottom: 30 }}>{job.jobTitle}</Text>
					</View>
					<View>
						<Text>{job.pay}</Text>
					</View>
					<View>
						<Text>{JSON.stringify(job.createdOn)}</Text>
					</View>
				</TouchableOpacity>
			))}
		</>
	);
};
export default MainScreen;
