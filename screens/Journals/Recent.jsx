import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { UserContext } from "../../functions/providers/UserContext";
import { color } from "../../functions/providers/ColorContext";
import JournalList from "./JournalList";
import IconButton from "../../components/General/Button";

export default function Recent(props) {
  const { navigation } = props;
  const { userID, journals, createJournal } = useContext(UserContext);

  return (
    <View style={{ ...styles.container, backgroundColor: color.background}}>
      <JournalList data={journals} navigation={navigation} />
      <IconButton
        onPress={() => {
          createJournal(userID, data => {
            navigation.navigate("Journal", { data });
          });        
        }
        }
        style={{}}
        icon="plus"
        size={36}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  // seems unused
  button: {
    height: 100,
    width: 100,
    backgroundColor: color.primary,
  },
});
