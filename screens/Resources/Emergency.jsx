import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, FlatList, Linking
} from 'react-native';
import { FontAwesome as Icon } from "@expo/vector-icons/";

import { ColorContext } from "../../functions/providers/ColorContext";
import styles from "../../styles/resourceStyles";
import generalStyles from "../../styles/generalStyles";
import Resource from "./Resource";

const emergency_resources = [
  {
    name: "National Suicide Prevention Lifeline",
    details: "Call 1-800-273-TALK (8255)",
    url: "tel:2012863030",
  },
  {
    name: "SAMHSA's National Helpline",
    details: "Call 1-800-661-HELP (4357)",
    url: "tel:2012863030",
  },
  {
    name: "Crisis Text Line",
    details: "Text \"HELLO\" to 741741",
    url: "sms:2012863030",
  },
  {
    name: "Disaster Distress Helpline",
    details: "Call 1-800-985-5990 or text \"TalkWithUs\" to 66746",
    url: "tel:2012863030:sms:66746",
  },
];

export default function Emergency(props) {
    const { color } = useContext(ColorContext);
    const { navigation } = props;

    return (
      <View style={{ ...styles.container, backgroundColor: color.background}}>
        <FlatList //flatlist of categories
          style={{ width: "100%" }}
          contentContainerStyle={{ width: "95%", marginLeft: "2.5%", paddingBottom: 20 }}
          data={emergency_resources}
          renderItem={({ item }) => {
            return (
              <View 
                style={{
                  width: "100%", 
                  height: 75, 
                  backgroundColor: color.primary, 
                  borderRadius: 10, 
                  marginTop: 10,
                  ...generalStyles.shadow,
                  shadowColor: color.shadow,
                  padding: 10,
                  justifyContent: 'center'
                  // flexDirection: "row"
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{ ...styles.title, color: color.primaryText }}
                    onPress={() => Linking.openURL(item.url)}
                  >
                    {item.name}
                    {/* <Icon name="chevron-right" color={color.primaryText} size={32} /> */}
                  </Text>
                  <Text style={{ ...styles.source, color: color.inactive }}>
                    <Icon name="phone" color={color.primaryText} size={16} />&nbsp;
                    {item.details}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
}
