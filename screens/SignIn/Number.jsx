import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons/';

import { login } from "../../functions/util/user";
import { UserContext } from '../../functions/providers/UserContext';
import { color } from '../../functions/providers/ColorContext';
import styles from '../../styles/signInStyles';

export default function Number(props) {
    const { navigation } = props;
    const { setUser } = useContext(UserContext);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <Text style={styles.headerText}>
                What's your number?
            </Text>
            <Text style={styles.subHeaderText}>
                We just need your number for verification and won't spam you or sell your data.
            </Text>
            <TextInput 
                placeholder="(123)-456-7890"
                placeholderTextColor={color.inactive}
                keyboardType="phone-pad"
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
                    navigation.navigate('Verify');
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
        </TouchableWithoutFeedback>
    );
}