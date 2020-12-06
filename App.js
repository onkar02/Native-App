import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log(courseGoals);
  const addGoalhandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title="Add new Model" onPress={() => setIsAddMode(true)} />
      </View>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalhandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        style={styles.list}
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  button: {
    height: 30,
    paddingBottom: 10,
  },
  list: {
    paddingTop: 20,
  },
});
