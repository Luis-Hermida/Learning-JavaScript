import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const InputScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      <Text style={styles.text}>My password is {password}</Text>
      {password.length < 4 ? (
        <Text style={styles.errorMessage}>Password must be 4 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    margin: 15,
    fontSize: 30,
  },
  errorMessage: {
    margin: 15,
    color: "rgb(255,0,0)",
  },
});

export default InputScreen;
