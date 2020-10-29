import React, { useContext } from 'react';
import {
    Text, View, TouchableOpacity, TextInput
} from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { login } from "../../functions/util/user";
import { UserContext } from '../../functions/providers/UserContext';
import { color } from '../../functions/providers/ColorContext';
import styles from '../../styles/signInStyles';

export default function Name(props) {
    const { navigation } = props;
    const { setUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                What's your name?
            </Text>
            <Text style={styles.subHeaderText}>
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
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Number');
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