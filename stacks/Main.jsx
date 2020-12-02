import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import _ from "lodash";

import SignInStack from "./SignIn";
import HomeStack from "./Home";
import LoadingScreen from "../screens/LoadingScreen";
import { showHeader } from "../functions/util/navigation";

import { ColorContext } from "../functions/providers/ColorContext";
import generalStyles from "../styles/generalStyles";

const Stack = createStackNavigator();

const Main = () => {
  const { color } = useContext(ColorContext);
  const [title, setTitle] = useState("");
  const route = "howdy";

  // const getRoute = state => {
  //   let i = state;
  //   console.log(i)
  //   while ((_.has(i, "index") && _.has(i, "routes")) || _.has(i, "state")) {
  //     if (_.has(i, "state")) {
  //       i = i.state;
  //     } else {
  //       i = i.routes[i.index];
  //     }
  //   }
  //   if (_.has(i, "params.screen")) {
  //     setTitle(i.params.screen);
  //   } else {
  //     setTitle("");
  //   }
  // }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignInStack"
        component={SignInStack}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false
        }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        headerShown={showHeader(route) ? "none" : "screen"}
        screenOptions={{
          gestureEnabled: false,
          headerTransparent: true,
        }}
        options={({ route, navigation }) => {
          const title = getFocusedRouteNameFromRoute(route);
          return {
            title,
            headerStyle: [
              {
                backgroundColor: color.primary,
                height: 100,
                borderBottomWidth: 0,
                shadowColor: "transparent",
              },
              title === "Moods" || title === "Profile"
                ? { ...generalStyles.shadow, shadowColor: color.shadow }
                : {},
            ],
            headerTitleStyle: {
              marginLeft: 20,
              fontSize: 32,
              fontFamily: "regular",
              color: color.primaryText,
            },
            headerTitleAlign: "left",
            headerLeft: () => null,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
