import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { color } from "../../functions/providers/ColorContext";
const backbutton = require('../../assets/X_back_button.png');
const moodbutton = require('../../assets/X_mood_button.png');
//const optionbutton = require('../../assets/X_option_button.png');

export default function Journal(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.topnav}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={backbutton}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('TrackJournal')}
                    style={{ marginLeft: 290 }}>
                    <Image source={moodbutton}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                {/* <Image source={optionbutton}
                    style={{ width: "100%", height: "100%", marginLeft: 10, borderColor: "red", borderWidth: 1 }}
                /> 
                Above image was not working so substituted with below imported icon for now
                */}
                <Icon style={{ marginTop: -5, marginLeft: 10 }}
                    name='more-vert'
                    size='40'
                    color={color.primaryText}
                />
            </View>
            <View style={styles.middle}>
                <TextInput
                    keyboardType="default"
                    placeholder="My Journal Entry Title"
                    style={{
                        fontSize: 28,
                        fontWeight: "bold"
                    }}
                />
                <Text style={styles.regtext}>11/06/20  7:00pm</Text>
                {/* The above will eventually be a timestamp of when the entry was created/started */}
            </View >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.notesui}>
                    <TextInput
                        keyboardType="default"
                        placeholder="Type your journal entry here..."
                        multiline={true}
                        style={{
                            fontSize: 20,
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroundColor
    },
    topnav: {
        flexDirection: "row",
        paddingVertical: 45,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 70
    },
    middle: {
        textAlign: "left",
        marginLeft: 10,
        marginRight: 10,
        marginTop: -90
    },
    notesui: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    headtext: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    regtext: {
        fontSize: 20
    }
});