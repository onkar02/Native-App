import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={style.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    marginVertical: 2,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
