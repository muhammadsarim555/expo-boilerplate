import React from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import {connect} from "react-redux";

// FILES
import { styles } from "./styles";
import {updateUser} from "../../store/Action";

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

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({
//   checking: payload => dispatch(badalMeriWali(payload))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
