import { StyleSheet } from "react-native";
import { color } from "../functions/providers/ColorContext";

const generalStyles = StyleSheet.create({
  shadow: {
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: color.inactive,
    shadowOffset: { height: 0, width: 0 }
  },
});

export default generalStyles;
