import React from "react";

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import ViewerScreen from "./Pages/ViewerScreen";
import SaverScreen from "./Pages/SaverScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import LocationDetails from "./Pages/LocationScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Viewer: { screen: ViewerScreen, },
    Saver: { screen: SaverScreen, },
  },
  {
    initialRouteName: "Viewer",
  }
);

const AppContainer = createContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
