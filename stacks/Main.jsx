import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SignInStack from "./SignIn";
import HomeStack from "./Home";
import LoadingScreen from "../screens/LoadingScreen";
import Header from "../components/Navigation/Header";
import { showHeader } from "../functions/util/navigation";

const screens = {
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
        gestureEnabled: false,
      }
    }
  },
  SignInStack: {
    screen: SignInStack,
    navigationOptions: () => {
      return {
        headerShown: false,
        gestureEnabled: false,
      };
    }
  },
  HomeStack: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: showHeader(navigation),
        gestureEnabled: false,
        header: <Header navigation={navigation} />
      }
    }
  }
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
