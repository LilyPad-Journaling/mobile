import React, { useState, useEffect, useMemo } from "react";
import MainStack from "./stacks/Main";
import { decode, encode } from "base-64";
import { TextInput, Text, BackHandler, AsyncStorage } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-view";

import { UserContext, useUser } from "./functions/providers/UserContext";
import {
  ColorContext,
  color as colorScheme,
  useColor
} from "./functions/providers/ColorContext";
// const { mp } = require("./functions/util/mixpanel");

const globalAny = global;

if (!globalAny.btoa) {
  globalAny.btoa = encode;
}

if (!globalAny.atob) {
  globalAny.atob = decode;
}

const App = () => {
  const { user, userID, journals, moods, newUser, setNewUser, updateUser, createUser, updateJournal, createJournal } = useUser();
  const {color, setName, colorSchemes} = useColor();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const userProvider = useMemo(() => ({ user, userID, journals, moods, newUser, setNewUser, updateUser, createUser, updateJournal, createJournal }), [user, userID, journals, moods, newUser, setNewUser, updateUser, createUser, updateJournal, createJournal]);
  const colorProvider = useMemo(() => ({ color, setName, colorSchemes }), [color, setName, colorSchemes]);

  useEffect(() => {
    // mp.identify(user.id);
    // mp.people_set(user.name);
    // mp.track("Open application");

    BackHandler.addEventListener("hardwareBackPress", () => true);

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.fontFamily = "regular";
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
  }, []);

  const loadFonts = () => {
    setFontsLoaded(true);
  };

  const getFontsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        regular: require("./assets/fonts/Apercu-Regular.otf"),
        medium: require("./assets/fonts/Apercu-Medium.otf"),
        bold: require("./assets/fonts/Apercu-Bold.otf"),
        mono: require("./assets/fonts/Apercu-Mono.otf"),
      }),
    ]);
  };


  if (fontsLoaded) {
    return (
      <UserContext.Provider value={userProvider}>
        <ColorContext.Provider value={colorProvider}>
            <ActionSheetProvider>
              <MainStack />
            </ActionSheetProvider>
        </ColorContext.Provider>
      </UserContext.Provider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <AppLoading startAsync={getFontsAsync} onFinish={loadFonts} />
      </SafeAreaProvider>
    );
  }
};

export default App;
