import React from "react";
import { Button, View } from "react-native";

import Header from "./Header"


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} title="Home" />

        <Button
          onPress={() => this.props.navigation.navigate('Profile')}
          title="Go to profile"
        />
      </View>
    );
  }
}