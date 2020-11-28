import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { UserContext } from "../../functions/providers/UserContext";
import { color } from "../../functions/providers/ColorContext";
import JournalList from "./JournalList";
import IconButton from "../../components/General/Button";

export default function Recent(props) {
  const { navigation } = props;
  const { journals } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <JournalList data={journals} navigation={navigation} />
      <IconButton
        onPress={() => navigation.navigate("Journal")}
        style={{}}
        icon="plus"
        size={36}
      />
    </View>
  );
}

let journalEntries = [
  {
    title: "Broke leg",
    body: "Not a great day, on a run and fell off a cliff.",
    private: false,
    starred: false,
    timeCreated: new Date("10/27/2020"),
  },
  {
    title: "Got into grad school!",
    body: "Heard back from graduate applications today and there is good news!",
    private: true,
    starred: true,
    timeCreated: new Date("10/27/2020"),
  },
  {
    title: "OBagel Closed",
    body:
      "No more french toast bagels for me because OBagel closed today",
    private: false,
    starred: true,
    timeCreated: new Date("10/27/2020"),
  },
  {
    title: "Simpsons Cancelled",
    body: "They just announced they are ending the Simpsons :-(",
    private: false,
    starred: true,
    timeCreated: new Date("10/29/2020"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: color.primary,
  },
});
