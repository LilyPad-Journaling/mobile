import {
  StyleSheet,
  Dimensions,
} from "react-native";
import { color } from "../functions/providers/ColorContext";

const windowWidth = Dimensions.get("window").width;

const journalListStyles = StyleSheet.create({
    entryList: {
      height: "100%",
      width: windowWidth,
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 10,
    },
    entry: {
      height: 75,
      width: windowWidth * 0.95,
      backgroundColor: color.primary,
      borderColor: color.inactive,
      borderBottomWidth: 1,
    },
    entryTop: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    entryBottom: {
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomWidth: 1,
    },
    entryContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    entryTitle: {
      color: color.primaryText,
      fontFamily: 'medium',
      fontSize: 16,
      marginBottom: 3
    },
    entryDescription: {
      color: color.inactive,
    },
  });

  export default journalListStyles;