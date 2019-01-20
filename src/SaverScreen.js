import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class SaverScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Saver</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
