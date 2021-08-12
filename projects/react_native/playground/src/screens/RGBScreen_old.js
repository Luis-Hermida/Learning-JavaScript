import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const RGBScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const valueChange = 15;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor("red", valueChange);
        }}
        onDecrease={() => {
          setColor("red", -1 * valueChange);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          setColor("green", valueChange);
        }}
        onDecrease={() => {
          setColor("green", -1 * valueChange);
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {
          setColor("blue", valueChange);
        }}
        onDecrease={() => {
          setColor("blue", -1 * valueChange);
        }}
        color="Blue"
      />
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
      <Text>
        `rgb(${red}, ${green}, ${blue})`
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RGBScreen;
