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
          <TouchableOpacity style={styles.buttonContainer1} onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
                <Text style={styles.text}> Flip</Text>
            </TouchableOpacity>
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
        <TouchableOpacity style = {styles.buttonContainer2} 
          onPress = {()=> takePicture()}>
            <Text>click</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer3}
        onPress ={() => navigation.navigate('save', {image})}>
        <Text>save</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.buttonContainer4}
        onPress = {()=> pickImage()}>
        <Text>gallery</Text>
        </TouchableOpacity>
          
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
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "green",
  },
  buttonContainer1: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:60,
    borderRadius:30,
    backgroundColor: "#90ee90",
},
  buttonContainer2: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:60,
    borderRadius:30,
    backgroundColor: "#897ec5",
},
  buttonContainer3: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:60,
    borderRadius:30,
    backgroundColor: "#efd08b",
  },
  buttonContainer4: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:60,
    borderRadius:30,
    backgroundColor: "#9de2ff",
  },
}); 

