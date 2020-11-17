import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  Entypo as EIcon,
  FontAwesome as FAIcon,
  Feather as FEIcon,
} from "@expo/vector-icons/";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers
} from 'react-native-popup-menu';
import moment from 'moment';

import styles from "../../styles/journalStyles";
import { color } from "../../functions/providers/ColorContext";

const { SlideInMenu } = renderers;

export default function Journal(props) {
  const { navigation } = props;

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = moment()
                  .utcOffset('-05:00')
                  .format(' MMM Do YYYY, hh:mm a');
    setCurrentDate(date);
  }, []);

  return (
    <MenuProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.topnav}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FAIcon name="chevron-left" color={color.inactive} size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("TrackJournal")}
              style={{ marginLeft: 290 }}
            >
              <FEIcon name="smile" color={color.inactive} size={32} />
            </TouchableOpacity>

            <Menu name="numbers" renderer={SlideInMenu} onSelect={value => this.selectNumber(value)}>
              <MenuTrigger customStyles={{ triggerOuterWrapper: styles.trigger }} >
                <EIcon
                  style={{ marginTop: -5, marginLeft: 10 }}
                  name="dots-three-vertical"
                  size={36}
                  color={color.inactive}
                />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption customStyles={{ optionText: [styles.bluetext] }} value={1} text='Pin' />
                <MenuOption customStyles={{ optionText: [styles.bluetext] }} value={2} text='Lock' />
                <MenuOption customStyles={{ optionText: [styles.bluetext] }} value={3} text='Share' />
                <MenuOption customStyles={{ optionText: [styles.redtext] }} value={4} text='Delete' />
              </MenuOptions>
            </Menu>

          </View>
          <View style={styles.middle}>
            <TextInput
              keyboardType="default"
              placeholder="Journal Entry Title"
              style={{
                fontSize: 28,
                fontWeight: "bold",
              }}
            />
            <Text style={styles.regtext}>{'Created: ' + currentDate}</Text>
            <Text style={styles.regtext}>{'Updated: ' + currentDate}</Text>
          </View>
          <View style={styles.notesui}>
            <TextInput
              keyboardType="default"
              placeholder="Type your journal entry here..."
              multiline={true}
              style={{
                fontSize: 20,
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

    </MenuProvider>
  );
}
