import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Pages/HomeScreen";
import Profile from "./Pages/ProfileScreen";
import Viewer from "./Pages/ViewerScreen";
import Saver from "./Pages/SaverScreen";

const Navigator = createStackNavigator(
  {
    Profile: { screen: ProfileScreen, },
    Viewer: { screen: ViewerScreen, },
    Saver: { screen: SaverScreen, },
    Location: { screen: LocationDetails, },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(Navigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
