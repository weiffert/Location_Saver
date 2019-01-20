import React from "react";
import { View, Button, Text, Image } from "react-native";

import ProfileScreen from "./ProfileScreen";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: false,
    }
  }
  toggleProfile() {
    this.setState({ profile: !this.state.profile });
  }


  render() {
    return (
      <View>
        <View style={{ alignItems: "flex-end", backgroundColor: "blue" }}>
          <Button style={{ backgroundColor: "green", width: 70, height: 70, borderRadius: 100 }}
            onPress={() => this.toggleProfile()} title="Press Me">
          </Button>
        </View>
        <ProfileScreen show={this.state.profile} />
      </View>
    )
  }
}