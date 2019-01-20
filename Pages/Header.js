import React from "react";
import { View, Text, Image } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={{alignItems: "flex-end", backgroundColor: "blue" }}>
        <View style={{backgroundColor: "green", width: 70, height: 70, borderRadius: 100}}></View>
      </View>
    )
  }
}