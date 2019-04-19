import React from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

// FILES
import { styles } from "./styles";

export default class AuthLoading extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
        const {container} = styles;

    return (
      <View style={container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading!!!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("App")}>
            <Text>Go  </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
