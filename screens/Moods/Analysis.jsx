import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet
} from 'react-native';

import { color } from '../../functions/providers/ColorContext';

export default function Analysis(props) {
    const { navigation } = props;
    return (
        // <View style = {styles.container}>
        //     <Text>Mooooood Analysis</Text>
        //     <TouchableOpacity>
        //         onPress={() => navigation.navigate('Track')}
        //         style = {styles.button}
        //     >
        //     <Text>Track</Text>
        //     </TouchableOpacity>
        // </View>
        <View style={styles.container}>
            <Text style={{
                fontSize: 24,
                color: color.primaryText,
                marginBottom: 5,
                textAlign: "left"    
            }}>
                Mood</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Track')}
                style={styles.button}
            >
                <Text style={{
                    fontSize: 40,
                    color: color.primary
                }}>
                    +
                </Text>
            </TouchableOpacity>
            <View style = {styles.graph}>
                <Text>
                    Test
                </Text>
            </View>
        </View>

        // <View style={styles.button}>
        //     <Text>Mooooood Analysis</Text>
        //     <TouchableOpacity
        //         onPress={() => navigation.navigate('Track')}
        //         style={styles.button}
        //     >
        //     <Text>Track</Text>
        //     </TouchableOpacity>
        // </View>
    );
}

// test 1 2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: color.highlight,
        alignItems: "center",
        justifyContent: "center"

    },
    graph: {
        height: 100,
        width: 100,
        backgroundColor: color.primary,
        alignItems: "stretch", 
        justifyContent: "flex-start"

    }
  });