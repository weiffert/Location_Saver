import React from "react";
import { View, Button, Text, Image } from "react-native";

import ProfileScreen from "./ProfileScreen";

export default class Header extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "blue" }}>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Press Me"
        >
          <View style={{ backgroundColor: "blue", width: 70, height: 70, borderRadius: 100 }}>
          </View>
        </Button>
      </View>
    )
  }
}