import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Pages/Home"
import Viewer from "./Pages/Viewer"
import Saver from "./Pages/Saver"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
    };
  }
  render() {
    return (
      <View>
        <Home />
        <Viewer />
        <Saver />
        {/*
        <View>
          <Button
            onPress={this.setState({ page: "Viewer" })}
            title="View Locations"
            disabled={true}
          />
          <Button
            onPress={this.setState({ page: "Saver" })}
            title="Save Location"
          />
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
