import React from "react";
import {Button } from "react-native-elements"
import { StyleSheet, Text, View } from "react-native";

import Header from "./Header"
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} title="Settings"></Header>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}