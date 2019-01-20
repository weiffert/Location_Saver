import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <View style={{ flex: 1, backgroundColor: "brown", position: "absolute" }}>
          <Text>Profile</Text>
        </View>
      );
    }
    return null;
  }
}