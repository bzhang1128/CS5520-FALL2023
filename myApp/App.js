import { View, Text, Button } from "react-native";
import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./screens/GoalDetails";
import { Ionicons } from '@expo/vector-icons';
import PressableButton from "./components/PressableButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#b8a" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "All My Goals",
          }}
        />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={
            ({ route }) => {
              return {
                title: route.params.pressedGoal.text,
                headerRight: () => {
                  return (
                    <PressableButton
                      defaultStyle={{ backgroundColor: "gray", padding: 1 }}
                      pressedStyle={{ opacity: 0.6 }}
                    >
                      <Ionicons name="warning-sharp" size={24} color="black" />
                    </PressableButton>
                  )
                },
              };
            }
            //pass a function that receives route prop as argument
            //use route prop to extrat goal text and set it on title
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}