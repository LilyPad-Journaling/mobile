import React from "react";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";

import { color } from "../../functions/providers/ColorContext";
import IconButton from "../../components/General/Button";
import generalStyles from "../../styles/generalStyles";

const windowWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Mood",
  },
  {
    name: "Anxiety",
  },
  {
    name: "Energy",
  },
  {
    name: "Activity",
  },
];

export default function Analysis(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{ marginTop: 5 }}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <Text style={{ fontSize: 18, margin: 7 }}>
                {item.name}
              </Text>
                <View style={[styles.graph, generalStyles.shadow]}>
                  <Text>Graph</Text>
                </View>
            </View>
          );
        }}
      />
      <IconButton
        onPress={() => navigation.navigate("Track")}
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
    backgroundColor: color.background,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: color.highlight,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  graph: {
    height: 175,
    width: windowWidth*.95,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
