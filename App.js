import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import Status from "./src/Status";
import Header from "./src/Header";
import ViewerScreen from "./src/ViewerScreen";
import HomeScreen from "./src/HomeScreen"
import ProfileScreen from "./src/ProfileScreen"
import SettingsScreen from "./src/SettingsScreen"
import SaverScreen from "./src/SaverScreen";
import LocationDetails from "./src/LocationScreen";

const AuthNav = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen 
    },
    Profile: {
      screen: ProfileScreen
    },
    /*Settings: {
      screen: SettingsScreen
    }*/
  }
);

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen 
    },
    Profile: {
      screen: ProfileScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  }
);

const DrawerContainer = createAppContainer(DrawerNav);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {//<Status />
        }
        <DrawerContainer/>
      </View>
    );
  }
}
