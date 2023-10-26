import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import PressableButton from "../components/PressableButton";
import { Ionicons } from '@expo/vector-icons';
import GoalUsers from "../components/GoalUsers";

export default function GoalDetails({ navigation, route }) {
  //   console.log(route.params.pressedGoal.text);
  const [isWarned, setIsWarned] = useState(false);

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <PressableButton
            pressedFunction={() => {
              console.log("warning pressed");
              setIsWarned(true);
            }}
            defaultStyle={{ backgroundColor: "#bbb", padding: 5 }}
            pressedStyle={{ opacity: 0.6 }}
          >
            <Ionicons name="warning" size={24} color="black" />
          </PressableButton>
        );
      },
    })
  }, [navigation])
  return (
    <View>
      {route.params ? (
        <Text>{route.params.pressedGoal.text}</Text>
      ) : (
        <Text>No extra data</Text>
      )}
      {isWarned && <Button title=" More" onPress={() => navigation.push("Details")} />}
      <GoalUsers />
    </View>
  );
}