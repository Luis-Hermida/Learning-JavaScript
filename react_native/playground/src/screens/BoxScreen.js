import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 400,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    // flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textOneStyle: {
    borderWidth: 10,
    borderColor: "red",
    padding: 10,
  },
  textTwoStyle: {
    borderWidth: 10,
    borderColor: "red",
    padding: 10,
    top: 60,
  },
  textThreeStyle: {
    borderWidth: 10,
    borderColor: "red",
    padding: 10,
  },
});

export default BoxScreen;
