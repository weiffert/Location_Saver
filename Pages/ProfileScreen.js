import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    if(this.props.show) {
    return (
      <View>
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      </View>
    );
    } else {
      return <Text>Don't Show</Text>
    }
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
