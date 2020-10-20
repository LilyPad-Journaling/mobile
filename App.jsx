import React, { useState, useEffect } from "react";
import MainStack from "./stacks/Main";
import { decode, encode } from "base-64";
import UserStore from "./UserStore";
import { Provider } from "mobx-react";
import { TextInput, Text, BackHandler } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-view";

const { fbInit } = require("./functions/util/fb");
// const { mp } = require("./functions/util/mixpanel");

const globalAny = global;

if (!globalAny.btoa) {
  globalAny.btoa = encode;
}

if (!globalAny.atob) {
  globalAny.atob = decode;
}

fbInit();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let userStore = new UserStore();

  useEffect(() => {
    // mp.identify(this.userStore.uid);
    // mp.people_set({ name: this.userStore.displayName });
    // mp.track("Open application");

    BackHandler.addEventListener("hardwareBackPress", () => true);
    Text.defaultProps = Text.defaultProps || {};
    // Ignore dynamic type scaling on iOS
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.fontFamily = 'regular';

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;

    // componentWillUnmount equivalent
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    };
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
      <Provider userStore={userStore}>
        <ActionSheetProvider>
          <MainStack />
        </ActionSheetProvider>
      </Provider>
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
