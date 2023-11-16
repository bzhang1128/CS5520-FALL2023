import { View, Text, Button } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  console.log(status);
  const verifyPermission = async () => {
    // first check the status.granted
    // if true return true
    // if false, ask for permission requestPermission
    // return the granted property of the result
    if (status.granted) {
      return true;
    } 
    const response = await requestPermission();
    return response.granted;
    
  };
  const takeImageHandler = async () => {
    try {
      // only lauch camera if I have permission
      const hasPermission = verifyPermission();
      // if (hasPermission) {
      //   const result = await ImagePicker.launchCameraAsync({
      //     mediaTypes: ImagePicker.MediaTypeOptions.All,
      //     allowsEditing: true,
      //     aspect: [4, 3],
      //     quality: 1,
      //   });
      // }
      if (!hasPermission) {
        Alert.alert("You need to give access to the camera");
      }
      //   if hasPermission, launch the camera
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      console.log(result);
      setImageUri(result.assets[0].uri);
      passImageUri(result.assets[0].uri);
    } catch (err) {
      console.log("take image error:", err);
    }
  };
  return (
    <View>
      <Button onPress={takeImageHandler} title="Take an Image" />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
