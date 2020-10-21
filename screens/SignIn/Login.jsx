import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, AsyncStorage
} from 'react-native';

import { login } from "../../functions/util/user";
import { UserContext } from '../../functions/providers/UserContext';
import { color } from '../../functions/providers/ColorContext';

export default function Login(props) {
    const { navigation } = props;
    const { setUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text>Hello Login</Text>
            <TouchableOpacity
                onPress={() => {
                    let data = {
                        id: "123",
                        name: "Hayden"
                    }
                    login(setUser, data);
                    navigation.navigate('Verify');
                }}
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