import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
  FontAwesome5 as FA5Icon,
  Feather as FEIcon,
} from "@expo/vector-icons/";

import Journals from "./HomeStacks/Journals";
import Moods from "./HomeStacks/Moods";
import Resources from "./HomeStacks/Resources";
import Profile from "./HomeStacks/Profile";
import { navigationStyles } from "../styles/navigationStyles";
import { showNav } from "../functions/util/navigation";
import generalStyles from "../styles/generalStyles";
import { ColorContext } from "../functions/providers/ColorContext";

const tabHeight = Platform.OS === "ios" ? 40 : 25;
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = ({ navigation }) => {
  const { color } = useContext(ColorContext);

  const iconStyle = {
    height: tabHeight,
    alignItems: "center",
    shadowRadius: 0.3,
    width: 32,
  };

  return (
    <Tab.Navigator
      initialRouteName="Journals"
      timingConfig={0}
      tabBarPosition={0}
      activeColor={color.highlight}
      inactiveColor={color.inactive}
      barStyle={{
        ...navigationStyles.footer,
        ...generalStyles.shadow,
        backgroundColor: color.primary,
      }}
      screenOptions={{
        showIcon: true,
        gestureEnabled: false,
      }}
      swipeEnabled={false}
      labeled={false}
    >
      <Tab.Screen
        name="Journals"
        component={Journals}
        navigationOptions={() => ({
          headerShown: showNav(navigation),
          tabBarVisible: showNav(navigation),
          gestureEnabled: false,
        })}
      options={{
        tabBarIcon: ({ color }) => (
          <FA5Icon name="pen-nib" style={iconStyle} color={color} size={30} />
        )
      }}
      />
      <Tab.Screen
        name="Moods"
        component={Moods}
        navigationOptions={() => ({
          headerShown: showNav(navigation),
          tabBarVisible: showNav(navigation),
          gestureEnabled: false,
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <FEIcon name="smile" style={iconStyle} color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        navigationOptions={{
          headerShown: showNav(navigation),
          tabBarVisible: showNav(navigation),
          gestureEnabled: false,
      }}
      options={{
        tabBarIcon: ({ color }) => (
          <FA5Icon name="link" style={iconStyle} color={color} size={30} />
        )
      }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        navigationOptions={{
            headerShown: showNav(navigation),
            tabBarVisible: showNav(navigation),
            gestureEnabled: false,
        }}
        options={{
          tabBarIcon: ({ color }) => (
            <FA5Icon name="user" style={iconStyle} color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
