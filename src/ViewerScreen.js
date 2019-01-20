import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ViewerScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Viewer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
