import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Header from "./Header"
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} title="Profile"></Header>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        /></View>
    );
  }
}