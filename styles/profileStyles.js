import {
  StyleSheet
} from "react-native";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  text: {
    paddingVertical: 20,
    textAlign: "left",
    fontSize: 20,
    marginLeft: 20,
  },
  logout: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  logoutText: {
    textAlign: "center",
    color: "red",
    textDecorationLine: "underline",
    fontSize: 18,
  },
  colorsRectangle: {
    backgroundColor: "white",
    padding: 20,
    marginLeft: -150,
    paddingLeft: 160,
  },
  fieldRectangle: {
    width: 260,
    height: 30,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "flex-start",
    marginLeft: 100,
    position: "absolute",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  });

  export default profileStyles;