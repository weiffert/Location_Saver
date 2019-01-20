import React from "react";

import { createStackNavigator, createAppContainer,  } from "react-navigation";

import ProfileScreen from "./Pages/ProfileScreen";
import ViewerScreen from "./Pages/ViewerScreen";
import SaverScreen from "./Pages/SaverScreen";
import LocationDetails from "./Pages/LocationScreen";

const StackNavigator = createStackNavigator(
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

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
