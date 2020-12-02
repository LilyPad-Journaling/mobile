import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import {
  FontAwesome5 as FA5Icon,
  Feather as FEIcon,
} from "@expo/vector-icons/";

import Journals from "./HomeStacks/Journals";
import Moods from "./HomeStacks/Moods";
import Resources from "./HomeStacks/Resources";
import Profile from "./HomeStacks/Profile";
import { ColorContext, color } from "../functions/providers/ColorContext";
import { navigationStyles } from "../styles/navigationStyles";
import { showNav } from "../functions/util/navigation";
import generalStyles from "../styles/generalStyles";

const tabHeight = Platform.OS === "ios" ? 40 : 25;

const screens = {
  Journals: {
    screen: Journals,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: showNav(navigation),
        tabBarVisible: showNav(navigation),
        gestureEnabled: false,
        title: "",
        tabBarIcon: ({ tintColor }) => (
          <FA5Icon name="pen-nib" color={tintColor} size={30} />
        ),
      };
    },
  },
  Moods: {
    screen: Moods,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: showNav(navigation),
        tabBarVisible: showNav(navigation),
        gestureEnabled: false,
        title: "",
        tabBarIcon: ({ tintColor }) => (
          <FEIcon name="smile" color={tintColor} size={30} />
        ),
      };
    },
  },
  Resources: {
    screen: Resources,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: showNav(navigation),
        tabBarVisible: showNav(navigation),
        gestureEnabled: false,
        title: "",
        tabBarIcon: ({ tintColor }) => (
          <FA5Icon name="link" color={tintColor} size={30} />
        ),
      };
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: showNav(navigation),
        tabBarVisible: showNav(navigation),
        gestureEnabled: false,
        title: "",
        tabBarIcon: ({ tintColor }) => (
          <FA5Icon name="user" color={tintColor} size={30} />
        ),
      };
    },
  },
};

const Home = createMaterialTopTabNavigator(screens, {
  initialRouteName: "Journals",
  tabBarPosition: "bottom",
  timingConfig: 0,
  tabBarOptions: {
    activeTintColor: color.highlight,
    inactiveTintColor: color.inactive,
    style: [
      navigationStyles.footer,
      generalStyles.shadow,
      { backgroundColor: color.primary },
    ],
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
    iconStyle: [
      {
        height: tabHeight,
        alignItems: "center",
        shadowRadius: 0.3,
        width: 32,
      },
    ],
  },
  swipeEnabled: false,
});

export default Home;
