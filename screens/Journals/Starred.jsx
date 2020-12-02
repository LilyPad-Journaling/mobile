import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { UserContext } from "../../functions/providers/UserContext";
import { ColorContext } from "../../functions/providers/ColorContext";
import JournalList from "./JournalList";
import IconButton from "../../components/General/Button";

export default function Starred(props) {
  const { navigation } = props;
  const { color } = useContext(ColorContext);
  const { userID, journals, createJournal } = useContext(UserContext);

  return (
    <View style={{ ...styles.container, backgroundColor: color.background }}>
      <JournalList
        data={journals.filter((journal) => journal.starred)}
        navigation={navigation}
      />
      <IconButton
        onPress={() => {
          createJournal(userID, (data) => {
            navigation.navigate("Journal", { data });
          });
        }}
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
  },
});
