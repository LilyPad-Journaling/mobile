import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
} from "react-native";

import { ColorContext } from "../../functions/providers/ColorContext";
import { UserContext } from "../../functions/providers/UserContext";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../styles/profileStyles";

const image = require("../../assets/X_paint_icon.png");

const Input = (props) => {
  const { color, setName } = useContext(ColorContext);
  const { placeholder, keyboardType, value, onChangeText } = props;

  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      placeholderTextColor={color.inactive}
      style={{
        fontSize: 20,
        width: "100%",
        height: "100%",
        marginLeft: 5,
      }}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const Circle = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        width: 70,
        height: 70,
        borderRadius: 100 / 2,
        marginRight: 5
      }}
    />
  );
};

export default function Settings(props) {
  const { navigation } = props;
  const { color, setName, colorSchemes } = useContext(ColorContext);
  const { user, setUser, setUserID } = useContext(UserContext);
  const [userName, setuName] = useState('');
  const [userPhone, setNumber] = useState('');
  const [userPIN, setPIN] = useState('');

  const data = [
    {name: "original", color: colorSchemes.original.background}, 
    {name: "dark1", color: colorSchemes.dark1.background},
    {name: "dark2", color: colorSchemes.dark2.background},
    {name: "dark3", color: colorSchemes.dark3.background},
    {name: "cyberpunk", color: colorSchemes.cyberpunk.background},
    {name: "green", color: colorSchemes.green.background},
    {name: "yellow", color: colorSchemes.yellow.background},
    {name: "lavender", color: colorSchemes.lavender.background},
    {name: "pink", color: colorSchemes.pink.background},
    {name: "periwinkle", color: colorSchemes.periwinkle.background},
    {name: "blue", color: colorSchemes.blue.background}
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[ {...styles.container, backgroundColor: color.background}]}>
        <View style={styles.row}>
          <Text style={{...styles.text, color: color.primaryText}}>Name</Text>
          <View style={styles.fieldRectangle}>
            <Input placeholder={user.name} keyboardType="default" value={userName} onChangeText={setuName} />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={{ ...styles.text, color: color.primaryText}}>Phone</Text>
          <View style={styles.fieldRectangle}>
            <Input placeholder={user.number.toString()} keyboardType="phone-pad" value={userPhone} onChangeText={setNumber} />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={{ ...styles.text, color: color.primaryText}}>PIN</Text>
          <View style={styles.fieldRectangle}>
            <Input placeholder={user.pin.toString()} keyboardType="number-pad" value={userPIN} onChangeText={setPIN} />
          </View>
        </View>

        <Text style={{ ...styles.text, marginTop: 20, color: color.primaryText }}>Color</Text>

        <View style={styles.row}>
          <View style={styles.row}>
            <Image
              source={image}
              style={{ marginLeft: 20, width: 50, height: 50 }}
            />
            <View style={{ marginLeft: 20, borderRadius: 20, overflow: "hidden" }}>
            <FlatList
              contentContainerStyle={styles.colorsRectangle}
              data={data}
              horizontal
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setName(item.name);
                    }}
                  >
                    <Circle backgroundColor={item.color} />
                  </TouchableOpacity>
                );
              }}
            />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={async () => {
            // ugly solution to logout / rerender
            setUser({});
            setUserID("");
            await AsyncStorage.clear();
            navigation.push("LoadingScreen", {
              update: Math.random(),
            });
          }}
          style={styles.logout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
