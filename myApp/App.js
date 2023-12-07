import { Linking } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./screens/GoalDetails";
import PressableButton from "./components/PressableButton";
import { Ionicons } from "@expo/vector-icons";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseSetup";
import Map from "./components/Map";

import * as Notifications from "expo-notifications";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async function (notification) {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: true,
    };
  },
});

const AuthStack = (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
);

const AppStack = (
  <>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerTitle: "All My Goals",
          headerRight: () => {
            return (
              <PressableButton
                pressedFunction={() => {
                  console.log("profile pressed");
                  navigation.navigate("Profile");
                }}
                defaultStyle={{ backgroundColor: "#bbb", padding: 5 }}
                pressedStyle={{ opacity: 0.6 }}
              >
                <Ionicons name="person" size={24} color="black" />
              </PressableButton>
            );
          },
        };
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <PressableButton
              pressedFunction={() => {
                console.log("logout pressed");
                try {
                  signOut(auth);
                } catch (err) {
                  console.log("singout err", err);
                }
              }}
              defaultStyle={{ backgroundColor: "#bbb", padding: 5 }}
              pressedStyle={{ opacity: 0.6 }}
            >
              <Ionicons name="exit" size={24} color="black" />
            </PressableButton>
          );
        },
      }}
    />
    <Stack.Screen
      name="Details"
      component={GoalDetails}
      options={
        ({ route }) => {
          return {
            title: route.params ? route.params.pressedGoal.text : "Details",
          };
        }
        //pass a function that receives route prop as argument
        //use route prop to extrat goal text and set it on title
      }
    />
    <Stack.Screen name="Map" component={Map} />
  </>
);

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // a valid user is logged in
        setIsUserLoggedIn(true);
      } else {
        //before authentication or after logout
        setIsUserLoggedIn(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(
          "received response notification ",
          response.notification.request.content.data.url
        );
        Linking.openURL(response.notification.request.content.data.url);
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#b8a" },
          headerTintColor: "white",
        }}
        initialRouteName="Signup"
      >
        {isUserLoggedIn ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
