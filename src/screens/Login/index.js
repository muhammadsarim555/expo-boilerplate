import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

// FILES
import { styles } from "./styles";

export default class Login extends React.Component {
  state = {
    isLoadingComplete: false
  };

  update = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Text>Login!!!</Text>
        <TouchableOpacity onPress={this.update}>
          <Text>Go </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
