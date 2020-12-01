import React, { useContext, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  AsyncStorage,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { UserContext } from "../../functions/providers/UserContext";
import { color } from "../../functions/providers/ColorContext";
import styles from "../../styles/signInStyles";
import { useEffect } from "react";

export default function Number(props) {
  const secretCode = "123456";
  const [code, setCode] = useState("");
  const { navigation } = props;
  const { createUser } = useContext(UserContext);

  useEffect(() => {
    if (code === secretCode) {
      console.log("verify page");
      createUser();
      AsyncStorage.setItem("loggedIn", "true");
      navigation.navigate("Onboarding");
    }
  }, [code]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ ...styles.container, backgroundColor: color.primary}}>
        <Text style={{ ...styles.headerText, color: color.primaryText}}>What's your verification code?</Text>
        <Text style={{ ...styles.subHeaderText, color: color.primaryText}}>
          You should receive an SMS verification code shortly.
        </Text>
        <TextInput
          placeholder="123456"
          placeholderTextColor={color.inactive}
          keyboardType="number-pad"
          style={{ fontSize: 20 }}
          onChangeText={setCode}
        />
        <TouchableOpacity
          style={[
            { ...styles.button, backgroundColor: color.highlight},
            code.length > 5
              ? { backgroundColor: "red" }
              : { backgroundColor: color.inactive },
          ]}
          onPress={() => {
            if (code.length > 5 && code !== secretCode) {
              Alert.alert("Invalid Code");
            }
          }}
        >
          <Icon
            name="chevron-right"
            color={color.primary}
            size={28}
            style={{ marginLeft: 3, marginTop: 2 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
