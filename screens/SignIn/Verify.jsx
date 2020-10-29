import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, TextInput
} from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { login } from "../../functions/util/user";
import { UserContext } from '../../functions/providers/UserContext';
import { color } from '../../functions/providers/ColorContext';
import styles from '../../styles/signInStyles';

export default function Number(props) {
    const { navigation } = props;
    const { setUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                What's your verification code?
            </Text>
            <Text style={styles.subHeaderText}>
                You should receive an SMS verification code shortly.
            </Text>
            <TextInput 
                placeholder="123456"
                placeholderTextColor={color.inactive}
                keyboardType="number-pad"
                style={{
                    fontSize: 20
                }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let data = {
                        id: "123",
                        number: "8185191330",
                        name: "Hayden"
                    }
                    login(setUser, data);
                    navigation.navigate('Onboarding');
                }}
            >
                <Icon
                    name="chevron-right"
                    color={color.primary}
                    size={28}
                    style={{marginLeft: 3, marginTop: 2 }}
                />
            </TouchableOpacity>
        </View>
    );
}