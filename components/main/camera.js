import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

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

