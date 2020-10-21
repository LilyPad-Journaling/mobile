import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, LogBox } from "react-native";

import { UserContext } from "../functions/providers/UserContext";
import { color } from "../functions/providers/ColorContext";

const LoadingScreen = (props) => {
    const { user } = useContext(UserContext);
    const checkIfLoggedIn = () => {
        setTimeout(() => {
            if (user !== null && user !== "") {
                props.navigation.navigate("HomeStack");
            } else {
                props.navigation.navigate("SignInStack");
            }
        }, 300);
    };

    useEffect(() => {
        LogBox.ignoreLogs(["Warning: ..."]);
        checkIfLoggedIn();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default LoadingScreen;
