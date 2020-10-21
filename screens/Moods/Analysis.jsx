import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import { color } from '../../functions/providers/ColorContext';

export default function Analysis(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Mood Analysis</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Track')}
                style={styles.button}
            >
                <Text>Track</Text>
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
        height: 100,
        width: 100,
        backgroundColor: color.primary
    }
  });