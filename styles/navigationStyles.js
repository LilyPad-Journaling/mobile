import { StyleSheet } from "react-native";
import { colorScheme } from "./colorScheme";

export const navigationStyles = StyleSheet.create({
  icon: {
    paddingRight: 16,
    paddingBottom: 4,
    paddingLeft: 16,
  },
  header: {
    backgroundColor: colorScheme.primary,
  },
  headerTitle: {
    color: colorScheme.primaryText,
    fontFamily: "Medium",
    fontSize: 20,
    width: "100%",
  },
  footer: {
    backgroundColor: colorScheme.primary,
    marginBottom: -5,
  },
});
