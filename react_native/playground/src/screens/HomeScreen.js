import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.button}>
        <Button
          title="Go to Component Screen"
          onPress={() => {
            navigation.navigate("Components");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to List Screen"
          onPress={() => {
            navigation.navigate("List");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Image Screen"
          onPress={() => {
            navigation.navigate("Image");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Counter"
          onPress={() => {
            navigation.navigate("Counter");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Color Screen"
          onPress={() => {
            navigation.navigate("Color");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to RGB Screen"
          onPress={() => {
            navigation.navigate("RGB");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Input Screen"
          onPress={() => {
            navigation.navigate("Input");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Box Screen"
          onPress={() => {
            navigation.navigate("Box");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
  },
});

export default HomeScreen;
