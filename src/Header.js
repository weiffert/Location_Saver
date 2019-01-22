import React from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-elements";
import { Header as NativeHeader} from "react-native-elements"

export default class Header extends React.Component {
  render() {
    return (
      <NativeHeader
        leftComponent={{ icon: 'menu', color: '#fff', onPress: ()=>this.props.navigation.openDrawer() }}
        centerComponent={{ text: this.props.title, style: { color: "#fff" } }}
      />
    );
  }
}
