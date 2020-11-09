import React, { useEffect, useContext } from "react";
import { View, Text, LogBox, AsyncStorage, Keyboard } from "react-native";

import { container } from "../styles/signInStyles";
import { UserContext } from "../functions/providers/UserContext";
import { NavigationActions } from "react-navigation";

const LoadingScreen = props => {
  const { user } = useContext(UserContext);
  const checkIfLoggedIn = () => {
    setTimeout(() => {
      AsyncStorage.getItem("loggedIn", (err, loggedIn) => {
        Keyboard.dismiss();
        if (loggedIn == "true" && user !== null && user !== "") {
          props.navigation.navigate("HomeStack", {}, NavigationActions.navigate({
            routeName: "Recent"
          }));
        } else {
          props.navigation.navigate("SignInStack", {}, NavigationActions.navigate({
            routeName: "Intro"
          }));
        }
      });
    }, 300);
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Warning: ..."]);
    checkIfLoggedIn();
  }, [props]);

  return (
    <View style={container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
