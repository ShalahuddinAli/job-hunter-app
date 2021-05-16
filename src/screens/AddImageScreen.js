import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddImageScreen = () => {
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(null);
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const takePicture = async (e) => {
		if (camera) {
			const data = await camera.takePictureAsync(null);
			setImage(data.uri);
		}
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<View style={styles.container}>
			<Camera
				ref={(ref) => setCamera(ref)}
				style={styles.fixedRatio}
				type={type}></Camera>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.galleryButton}
					onPress={() => {
						console.log('changed to galery');
					}}>
					<MaterialCommunityIcons
						name="folder-multiple-image"
						size={24}
						color="white"
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => takePicture()}>
					<View style={styles.snapButton}></View>
				</TouchableOpacity>
				{image && <Image source={{ uri: image }} />}
				<TouchableOpacity
					style={styles.flipButton}
					onPress={() => {
						setType(
							type === Camera.Constants.Type.back
								? Camera.Constants.Type.front
								: Camera.Constants.Type.back
						);
					}}>
					{type === Camera.Constants.Type.back ? (
						<MaterialCommunityIcons
							name="camera-front-variant"
							size={24}
							color="white"
						/>
					) : (
						<MaterialCommunityIcons
							name="camera-rear-variant"
							size={24}
							color="white"
						/>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AddImageScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	camContainer: {
		flex: 1,
		margin: 0,
		padding: 0,
	},
	fixedRatio: {
		flex: 1,
		height: '100%',
		// aspectRatio: 1,
	},
	buttonContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	snapButton: {
		backgroundColor: 'white',
		height: 70,
		width: 70,
		borderRadius: 50,
		borderWidth: 0.5,
		borderColor: '#2ba5d7',
	},
});
