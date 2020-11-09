import { StyleSheet } from "react-native";
import { color } from "../functions/providers/ColorContext";

const resourceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryContainer: {
    backgroundColor: color.primary,
    borderRadius: 15,
    padding: 5,
    marginTop: 10,
  },
  category: {
    fontSize: 20,
    color: color.primaryText,
  },
  contentContainer: {
    width: "95%",
    // borderRadius: 25,
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: color.primaryText,
  },
  dropdownArrow: {
    height: 30,
    width: 30,
    backgroundColor: color.highlight,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    right: 10,
  },
  title: {
    fontSize: 18,
    color: color.primaryText,
  },
  source: {
    fontSize: 16,
    color: color.inactive,
  },
});

export default resourceStyles;
