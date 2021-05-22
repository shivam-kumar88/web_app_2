import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async() =>{
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri)
      setImage(data.uri);
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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

