import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import General from "../../screens/Resources/General";
import Local from "../../screens/Resources/Local";
import Emergency from "../../screens/Resources/Emergency";
import { ColorContext } from "../../functions/providers/ColorContext";
import generalStyles from "../../styles/generalStyles";

const Tab = createMaterialTopTabNavigator();

const ResourcesTabs = () => {
  const { color } = useContext(ColorContext);

  return (
    <Tab.Navigator
      initialRouteName="General"
      timingConfig={0}
      upperCaseLabel={false}
      tabBarOptions={{
        activeTintColor: color.highlight,
        inactiveTintColor: color.primaryText,
        style: {
          backgroundColor: color.primary,
          ...generalStyles.shadow,
        },
        labelStyle: {
          fontSize: 22,
          fontFamily: "medium",
          textTransform: "none",
        },
        indicatorStyle: {
          backgroundColor: color.highlight,
        },
      }}
    >
      <Tab.Screen
        name="General"
        component={General}
      />
      <Tab.Screen
        name="Local"
        component={Local}
      />
      <Tab.Screen
        name="Emergency"
        component={Emergency}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Resources = () => {
  return (
      <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Resources"
          headerShown={ false }
          defaultNavigationOptions={{
          ...TransitionPresets.FadeFromBottomAndroid,
          }}
      >
          <Stack.Screen name="Resources" component={ResourcesTabs} />
      </Stack.Navigator>
  )
}

export default Resources;