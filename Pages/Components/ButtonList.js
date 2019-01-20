import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class ButtonList extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Home"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Profile")}
          title="Profile"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Viewer")}
          title="View Locations"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Saver")}
          title="Save Location"
        />
      </View>
    );
  }
}