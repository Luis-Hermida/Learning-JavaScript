import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = (props) => {
  const myName = "Luis";

  return (
    <View>
      <Text style={styles.title}>Getting started with React Native!</Text>
      <Text style={styles.subTitle}>{myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  subTitle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
