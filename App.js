import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation";

import Status from "./Pages/Status";
import Header from "./Pages/Header";
import ViewerScreen from "./Pages/ViewerScreen";
import SaverScreen from "./Pages/SaverScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import LocationDetails from "./Pages/LocationScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Viewer: { screen: ViewerScreen },
    Saver: { screen: SaverScreen },
  },
  {
    initialRouteName: "Viewer",
  }
);

const TabContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Status />
        <Header />
        <TabContainer />
      </View>
    );
  }
}
