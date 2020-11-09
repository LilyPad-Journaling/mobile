import React, { useState } from "react";
import {
  Text, View, TouchableOpacity, StyleSheet, FlatList, SafeAreaView
} from "react-native";

import { FontAwesome as Icon } from "@expo/vector-icons/";
import Slider from "react-native-slider";

import { color } from "../../functions/providers/ColorContext";

const data = [
  {
    name: "Rate Your Mood",
  },
  {
    name: "Rate Your Anxiety",
  },
  {
    name: "Rate Your Energy",
  },
  {
    name: "Rate Your Activity"
  },
];

export default function Track(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FlatList
        style={{ width: "90%" }}
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.sliderspace}>
              <Text style={{ fontSize: 20,
              marginBottom: 10}}>
                {item.name}
              </Text>
              <SliderBar >
                {/* <View style={styles.graph}>
                <Text>Graph</Text>
              </View> */}
              </SliderBar>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={{
          fontSize: 20,
          color: color.inactive
        }}>
          Complete
                </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 40,
    width: 175,
    borderRadius: 10,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    marginBottom: "5%"
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: color.primary,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "regular",
    marginLeft: 25
  },
  sliderspace: {
    height: 125,
    width: "100%",
    backgroundColor: color.backgrounds,
    marginTop: 20
  }
});

const SliderBar = () => {
  const [value, setValue] = useState(0);

  return (
    <View>
      <Slider
        value={value}
        onValueChange={setValue}
        thumbStyle={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
        minimumTrackTintColor = "#000099"
        maximumTrackTintColor="white"
      />
    </View>
  )
};

const Header = props => {
  const { navigation } = props;

  return (
    <View style={{ backgroundColor: color.primary, width: "100%" }}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity style={{
            position: "relative",
            left: 5
          }}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="chevron-left"
              color={color.primaryText}
              size={28}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Mood Tracker</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}