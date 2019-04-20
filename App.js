import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

// PACKAGES
import { Provider } from "react-redux";

// FILES
import store from "./src/store/index";
import Navigation from "./src/navigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
