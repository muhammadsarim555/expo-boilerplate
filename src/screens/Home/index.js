import React from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

// FILES
import { styles } from "./styles";

export default class Home extends React.Component {
  render() {
    const { container } = styles; // destruncting

    return (
      <View style={container}>
        <Text>Home!!!</Text>
      </View>
    );
  }
}
