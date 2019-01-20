import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Viewer from "./Pages/Viewer";
import Saver from "./Pages/Saver";

const Navigator = createStackNavigator(
  {
    Home: { screen: Home,},
    Profile: { screen: Profile,},
    Viewer: { screen: Viewer,},
    Saver: { screen: Saver,},
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
