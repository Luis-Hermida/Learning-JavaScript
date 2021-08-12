import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 10 },
    { name: "Friend #2", age: 15 },
    { name: "Friend #3", age: 20 },
    { name: "Friend #4", age: 25 },
    { name: "Friend #5", age: 30 },
    { name: "Friend #6", age: 35 },
    { name: "Friend #7", age: 40 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.text}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default ListScreen;
