import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Home extends React.Component {
  render() {
    return <Text>Home</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
