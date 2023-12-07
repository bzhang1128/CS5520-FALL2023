import { View, Text, Button, Alert } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";

export default function NotificationManager() {
  const verifyPermission = async () => {
    const status = await Notifications.getPermissionsAsync();
    console.log(status);
    if (status.granted) {
      return true;
    }
    const response = await Notifications.requestPermissionsAsync({
      ios: { allowBadge: true },
    });
    return response.granted;
  };
  const scheduleNotificationHandler = async () => {
    try {
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert.alert("You need to give access to Notification");
        return;
      }
      Notifications.scheduleNotificationAsync({
        content: {
          title: "first notification",
          body: "OUR FIRST NOTIFICATION EVER!",
        },
        trigger: { seconds: 5 },
      });
    } catch (err) {
      console.log("schedule notification err:", err);
    }
  }
  return (
    <View>
      <Button
        title="Remine me to add a goal daily"
        onPress={scheduleNotificationHandler}
      />
    </View>
  );
}
