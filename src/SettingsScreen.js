import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Header from "./Header"
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation}></Header>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}