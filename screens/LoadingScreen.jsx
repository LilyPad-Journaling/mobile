import React, { useEffect, useContext } from "react";
import { View, Text, LogBox, AsyncStorage } from "react-native";

import { container } from "../styles/signInStyles";
import { UserContext } from "../functions/providers/UserContext";

const LoadingScreen = (props) => {
  const { user } = useContext(UserContext);
  const checkIfLoggedIn = () => {
    setTimeout(() => {
      AsyncStorage.getItem("loggedIn", (err, loggedIn) => {
        if (loggedIn == "true" && user !== null && user !== "") {
          props.navigation.navigate("HomeStack");
        } else {
          props.navigation.navigate("SignInStack");
        }
      });
    }, 300);
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Warning: ..."]);
    checkIfLoggedIn();
  }, []);

  return (
    <View style={container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
