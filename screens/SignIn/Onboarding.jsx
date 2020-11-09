import React from "react";
import {
    Text, View, TouchableOpacity, StyleSheet
} from "react-native";

import { color } from "../../functions/providers/ColorContext";

export default function Onboarding(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text>Onboarding</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeStack")}
            >
                <View style={styles.button}>
                    <Text>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: color.primary
    }
  });