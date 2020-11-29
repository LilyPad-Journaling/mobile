import React, { useContext, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { UserContext } from "../../functions/providers/UserContext";
import { color } from "../../functions/providers/ColorContext";
import styles from "../../styles/signInStyles";

export default function Name(props) {
  const [name, setName] = useState("");
  const { navigation } = props;
  const { newUser, setNewUser } = useContext(UserContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.headerText}>What's your name?</Text>
        <Text style={styles.subHeaderText}>
          This is what we'll call you inside the app and it won’t be shared with
          anyone.
        </Text>
        <TextInput
          placeholder="Johnny Appleseed"
          placeholderTextColor={color.inactive}
          style={{ fontSize: 20 }}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={[
            styles.button,
            name.length > 2 ? {} : { backgroundColor: color.inactive },
          ]}
          onPress={() => {
            if (name.length > 2) {
              setNewUser({ ...newUser, name });
              navigation.navigate("Number");
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
