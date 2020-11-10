import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { color } from "../../functions/providers/ColorContext";

export default function Onboarding(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Onboarding Screen</Text>
      <View style={{ height: 50 }} />
      <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
        <View style={styles.button}>
          <Text>Enter!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: color.background,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  headerText: {
    fontSize: 24
  },
});
