import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, AsyncStorage
} from 'react-native';

import { login } from "../../functions/util/user";
import { UserContext } from '../../functions/providers/UserContext';
import { color } from '../../functions/providers/ColorContext';
import { TextInput } from 'react-native-gesture-handler';

export default function Login(props) {
    const { navigation } = props;
    const { setUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 24,
                color: color.primaryText,
                marginBottom: 30            
            }}>
                What's your name?
            </Text>
            <Text style={{
                fontSize: 16,
                color: color.primaryText,
                marginBottom: 40,
                textAlign: "center",
                marginHorizontal: 30
            }}>
                This is what we’ll call you inside the app and it won’t be shared with anyone.
            </Text>
            <TextInput 
                placeholder="Johnny Appleseed"
                placeholderTextColor={color.inactive}
                style={{
                    fontSize: 20
                }}
            />
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
                    <Text style={{ color: color.primary}}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: color.highlight,
        alignItems: "center",
        justifyContent: "center"
    }
  });