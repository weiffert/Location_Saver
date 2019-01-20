import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      </View>
    );
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
