import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


export default function camera({navigation}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const CameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(CameraStatus.status === 'granted');
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async() =>{
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri)
      setImage(data.uri);
    }
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission===false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission===false) {
    return <Text>No access to camera and gallery</Text>;
  }
  return (
    <View style={{flex:1}}>
        <View style={styles.cameracontainer}>
            <Camera
              ref = {ref => setCamera(ref)}
              style={styles.fixesRatio} 
              type={type}
              ratio = {'1:1'}/>         
        </View>
        <Button
            style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
            title = "flip camera"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
        </Button>
        <Button 
          title = "take picture"
          onPress = {()=> takePicture()}/>
        <Button title="save" onPress ={() => navigation.navigate('save', {image})}/>
        <Button 
          title = "gallery"
          onPress = {()=> pickImage()}/>
        {image && <Image source={{uri:image}} style = {{flex:1}}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  cameracontainer : {
    flex:1,
    flexDirection: 'row'
  },
  fixesRatio : {
      flex: 1,
      aspectRatio: 1
  }
}); 

