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
            <Text>Recent</Text>
            <JournalList data={journalEntries} navigation={navigation}/>
        </View>
    );
}

const journalEntries = [
    {
        title: "Entry Four",
        description: "description 4",
        date: new Date("1/1/2020")
    },
    {
        title: "Entry Three",
        description: "description 3",
        date: new Date("1/2/2020")
    },
    {
        title: "Entry Two",
        description: "description 2",
        date: new Date("1/2/2020")
    },
    {
        title: "Entry One",
        description: "description 1",
        date: new Date("1/2/2020")
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