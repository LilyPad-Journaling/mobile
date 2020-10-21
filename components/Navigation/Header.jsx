import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { color } from '../../functions/providers/ColorContext';

export default function Header(props) {
    const { navigation } = props;
    let title = navigation.state.routes[navigation.state.index].routeName;
    return (
        <View style={{ backgroundColor: color.primary }}>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: color.primary,
        justifyContent: "center"
    },
    text: {
        marginLeft: 20,
        fontSize: 32,
        fontFamily: "regular"
    }
  });