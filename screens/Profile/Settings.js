import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import { color } from '../../functions/providers/ColorContext';

export default function Settings(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name</Text>
            
            <Text style={styles.text}>Phone</Text>
            <Text style={styles.text}>PIN</Text>
            <Text style={styles.text}>Color</Text>
            <View style={styles.Rectangle}/>
            <Text style={styles.logout}>Logout</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: color.background,
    },
    text: {
        marginTop: 16,
        paddingVertical: 8,
        textAlign: "left",
        fontSize: 20
    },
    logout: {
        marginTop: 300,
        textAlign: "center",
        color: "red",
        textDecorationLine: "underline",
        fontSize: 20
    },
    Rectangle: {
        marginTop: 20,
        width: 360,
        height: 100,
        backgroundColor: "white"
       
        }
  });
