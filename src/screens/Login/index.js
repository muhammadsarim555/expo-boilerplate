import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

export default class Login extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login!!!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("App")}>
            <Text>Go  </Text>
        </TouchableOpacity>
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
