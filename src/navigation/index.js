import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

import AuthLoadingScreen from "../components/AuthLoading";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";

const AuthStack = createStackNavigator({ Login: LoginScreen });
const Tab = createBottomTabNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

const DrawerNavigator = createDrawerNavigator({
    AuthLoading: AuthLoadingScreen,
    Tab: Tab
});
const AppStack = createStackNavigator({ App:  DrawerNavigator, });

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App:  AppStack,//AppStack,
      Main: SignUpScreen
    },
    {
      initialRouteName: "Auth"
    }
  )
);
