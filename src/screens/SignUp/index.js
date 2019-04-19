import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

export default class SignUp extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
