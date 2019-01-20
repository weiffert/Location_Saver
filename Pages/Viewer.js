import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ButtonList from "./Components/ButtonList";

export default class Viewer extends React.Component {
  render() {
    return (
      <View>
        <ButtonList navigation={this.props.navigation}/>
        <View style={styles.container}>
          <Text>Viewer</Text>
        </View>
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
