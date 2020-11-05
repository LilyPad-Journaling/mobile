import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';
import JournalList from './JournalList';

import { color } from '../../functions/providers/ColorContext';

export default function Recent(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <JournalList data={journalEntries} navigation={navigation} />
        </View>
    );
}

let journalEntries = [
    {
        title: "Entry One",
        body: "This is the body of entry one.",
        private: false,
        starred: false,
        timeCreated: new Date("10/27/2020")
    },
    {
        title: "Entry Two",
        body: "The body of this entry will be hidden.",
        private: true,
        starred: true,
        timeCreated: new Date("10/27/2020")
    },
    {
        title: "Entry Three",
        body: "The body of this entry is long to test the truncation of journal bodies when they are above 50 characters long. I also want to make sure that the format is proper!",
        private: false,
        starred: true,
        timeCreated: new Date("10/27/2020")
    },
    {
        title: "Entry Four",
        body: "This journal is starred. This is the body.",
        private: false,
        starred: true,
        timeCreated: new Date("10/29/2020")
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: color.primary
    }
});