import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 as FA5Icon } from "@expo/vector-icons/";

import { color } from "../../functions/providers/ColorContext";
import styles from "../../styles/signInStyles";
import generalStyles from "../../styles/generalStyles"

export default function Button(props) {
  const { onPress, size, icon } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, generalStyles.shadow]}>
      <FA5Icon name={icon} color={color.primary} size={size} />
    </TouchableOpacity>
  );
}
