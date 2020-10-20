import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import { colorScheme } from '../../styles/colorScheme';

export default function Local(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Local</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorScheme.background,
        alignItems: "center",
        justifyContent: "center"
    }
  });