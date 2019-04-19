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
import HomeScreen from "../screens/Home";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUpScreen,
  AuthLoading: AuthLoadingScreen
});

const DrawerNavigator = createDrawerNavigator({
  Home: HomeStack,
  SignUp: SignUpScreen
});

const Tab = createBottomTabNavigator({
  Home: DrawerNavigator,
  SignUp: SignUpScreen,
  AuthLoading: AuthLoadingScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Home: Tab
    },
    {
      initialRouteName: "Login"
    }
  )
);
