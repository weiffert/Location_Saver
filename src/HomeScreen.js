import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import Header from "./Header";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} title="Home" />
        <View style={{flex: 1, justifyContent: "flex-end", alignItems: "flex-end", backgroundColor: 'red'}}>
          <Button
            raised
            backgroundColor="#dd9933"
            title="Save"
            icon={{name: 'add-location'}}
            buttonStyle={{marginBottom: 30, borderRadius: 100}}
            onPress={() => this.props.saveLocation()}
          />
        </View>
      </View>
    );
  }
}
