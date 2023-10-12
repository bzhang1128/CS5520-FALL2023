import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { AntDesign } from '@expo/vector-icons';

export default function GoalItem({ goal, deleteHandler, pressHandler }) {
  function deletePressed() {
    deleteHandler(goal.id);
  }

  function goalPressed() {
    pressHandler(goal.id);
  }

  return (
    <Pressable
      // style={styles.goalContainer}
      onPress={goalPressed}
      // android_ripple={{ color: "#f00" }}
      defaultStyle={styles.goalContainer}
      pressedStyle={styles.goalPressed}
      style={({ pressed }) => {
        return [
          {
            backgroundColor: pressed? "#aaa" : "beige",
            opacity: pressed? 0.5 : 1,
          },
        ];
      }}
    >
      <Text style={styles.text}>{goal.text}</Text>
      {/* <View style={{ height: "100%" }}> */}
      {/* <Button color="black" title="X" onPress={deletePressed} /> */}
      <PressableButton
        pressedFunction={deletePressed}
        defaultStyle={{ backgroundColor: "lightgray", padding: 5 }}
        pressedStyle={{ backgroundColor: "pink", opacity: 0.6 }}
      >
        <AntDesign name="delete" size={24} color="black" />
      </PressableButton>
      {/* </View> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    backgroundColor: "beige",
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
  },

  text: {
    color: "#a09",
    padding: 5,
    fontSize: 30,
  },
  goalPressed: {
    backgroundColor: "#aaa",
    opacity: 0.5,
  },
});