import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import { color } from "../../functions/providers/ColorContext";

const data = [
  {
    name: "Mood",
  },
  {
    name: "Energy",
  },
  {
    name: "Stress",
  },
];

export default function Analysis(props) {
  const { navigation } = props;
  return (
    // <View style = {styles.container}>
    //     <Text>Mooooood Analysis</Text>
    //     <TouchableOpacity>
    //         onPress={() => navigation.navigate('Track')}
    //         style = {styles.button}
    //     >
    //     <Text>Track</Text>
    //     </TouchableOpacity>
    // </View>
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: color.primaryText,
          marginBottom: 5,
          textAlign: "left",
        }}
      >
        Mood
      </Text>
      <FlatList
        style={{ width: '90%' }}
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <Text>{item.name}</Text>
              <View style={styles.graph}>
                <Text>Graph</Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Track")}
        style={styles.button}
      >
        <Text
          style={{
            fontSize: 40,
            color: color.primary,
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
            +
        </Text>
      </TouchableOpacity>
    </View>

    // <View style={styles.button}>
    //     <Text>Mooooood Analysis</Text>
    //     <TouchableOpacity
    //         onPress={() => navigation.navigate('Track')}
    //         style={styles.button}
    //     >
    //     <Text>Track</Text>
    //     </TouchableOpacity>
    // </View>
  );
}

// test 1 2

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
    height: 150,
    width: '100%',
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
});
