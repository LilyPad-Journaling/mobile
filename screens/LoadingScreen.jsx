import React, { useEffect } from "react";
import { View, Text, AsyncStorage, StyleSheet, LogBox } from "react-native";
import { inject, observer } from "mobx-react";

import { colorScheme } from "../styles/colorScheme";

const LoadingScreen = inject('userStore')(observer((props) => {
    const checkIfLoggedIn = () => {
        setTimeout(() => {
            AsyncStorage.getItem("phoneNumber").then( async (value) => {
                if (value != null && value != "") {
                    props.userStore.fetchUserDetails();
                    props.navigation.navigate("HomeStack", { selected: [] });
                } else {
                    props.navigation.navigate("SignInStack");
                }
            });
        }, 300);
    };

    useEffect(() => {
        LogBox.ignoreLogs(["Warning: ..."]);
        checkIfLoggedIn();
    });

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorScheme.background,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default LoadingScreen;
