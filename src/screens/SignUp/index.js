import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

// FILES
import { styles } from "./styles";

export default class SignUp extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Text>SignUp!!!</Text>
      </View>
    );
  }
}
