import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={3}
      ></ImageDetail>
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={4}
      ></ImageDetail>
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={4}
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
