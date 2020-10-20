import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import { colorScheme } from '../../styles/colorScheme';

export default function Login(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Verify')}
            >
                <View style={styles.button}>
                    <Text>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorScheme.background,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: colorScheme.primary
    }
  });