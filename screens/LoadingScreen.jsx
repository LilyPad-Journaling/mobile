import React, { useEffect, useContext } from "react";
import { View, Text, LogBox, Keyboard } from "react-native";

import { ColorContext } from "../functions/providers/ColorContext";
import { UserContext } from "../functions/providers/UserContext";

const LoadingScreen = (props) => {
  const { navigation } = props;
  const { color } = useContext(ColorContext);
  const { userID } = useContext(UserContext);

  const checkIfLoggedIn = () => {
    setTimeout(() => {
      Keyboard.dismiss();
      if (userID !== null && userID !== "") {
        navigation.navigate("HomeStack", { screen: "Recent" });
      } else {
        navigation.navigate("SignInStack", { screen: "Intro" });
      }
    }, 300);
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Warning: ..."]);
    checkIfLoggedIn();
  }, [props]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: color.primary, flex: 1 }}>
      <Text style={{ fontFamily: "bold", fontSize: 28, color: color.primaryText }}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
