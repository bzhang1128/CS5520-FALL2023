import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/Input";
import GoalItem from "../components/GoalItem";

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const name = "My Awesome App";

  function changedDataHandler(data) {
    const newGoal = { text: data, id: Math.random() };
    // const newArray = [...goals, newGoal];
    // setGoals(newArray)
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
    //use the received data to update the text state variable
    setText(data);
    makeModalInvisible();
  }

  function makeModalVisible() {
    setIsModalVisible(true);
  }

  function makeModalInvisible() {
    setIsModalVisible(false);
  }

  function goalPressHandler(pressedGoal) {
    console.log("I was pressed ", pressedGoal);
    // we should navigate to a new component and show goal's details
    navigation.navigate("Details", { pressedGoal });
  }

  function goalDeleteHandler(deletedId) {
    console.log("I was deleted ", deletedId);
    //use array.filter to remove the item with deletedId
    // keep the items where goal's id is not deletedId
    // const newArray = goals.filter((goal) => {
    //   return goal.id != deletedId;
    // });
    // setGoals(newArray);
    //more concise
    // setGoals(
    //   goals.filter((goal) => {
    //     return goal.id != deletedId;
    //   })
    // );
    // using updater function to make sure correct updated value is given in goals
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => {
        return goal.id != deletedId;
      });
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on {name} !</Text> */}
      {/* render Header component here and pass a prop to it with the name variable as value */}
      <View style={styles.topContainer}>
        <Header appName={name} />
        <StatusBar style="auto" />
        {/* pass another prop to Input with the modalIsVisible as its value */}
        <Input
          changedHandler={changedDataHandler}
          modalVisiblity={isModalVisible}
          hideModal={makeModalInvisible}
        />
        <Button title="Add a goal" onPress={makeModalVisible} />
        {/* Inside this text show what user is typing */}
      </View>
      <View style={styles.bottomContainer}>
        {/* <Text style={styles.text}>{text}</Text> */}
        {/* <ScrollView
          bounces={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {goals.map((goal) => {
            return (
              <Text key={goal.id} style={styles.text}>
                {goal.text}
              </Text>
            );
          })}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={goals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                goal={item}
                deleteHandler={goalDeleteHandler}
                pressHandler={goalPressHandler}
              />
            );

            // return <Text style={styles.text}>{item.text}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    // alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  text: {
    color: "#a09",
    backgroundColor: "#aaa",
    borderRadius: 5,
    padding: 5,
    fontSize: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
});