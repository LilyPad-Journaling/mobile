import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import { color } from '../../functions/providers/ColorContext';
import JournalList from './JournalList';

export default function Private(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <JournalList data={journalEntries} navigation={navigation} />
        </View>
    );
}

const journalEntries = [
    {
        title: "Entry One",
        description: "description 1",
        date: new Date("10/27/2020")
    },
    {
        title: "Entry Two",
        description: "description 2",
        date: new Date("10/27/2020")
    },
    {
        title: "Entry Three",
        description: "description 3",
        date: new Date("10/27/2020")
    },
    {
        title: "Entry Four",
        description: "description 4",
        date: new Date("10/29/2020")
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: "center",
        justifyContent: "center"
    }
  });