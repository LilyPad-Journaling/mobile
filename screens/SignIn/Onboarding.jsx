import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "../../styles/onboardingStyles";
import { ColorContext } from "../../functions/providers/ColorContext";

export default function Onboarding(props) {
  const { navigation } = props;
  const { color } = useContext(ColorContext);

  return (
    <View style={{ ...styles.container, backgroundColor: color.primary}}>
      <Text style={styles.headerText}>Onboarding Screen</Text>
      <View style={{ height: 50 }} />
      <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
        <View style={{ ...styles.button, backgroundColor: color.background}}>
          <Text>Enter!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
