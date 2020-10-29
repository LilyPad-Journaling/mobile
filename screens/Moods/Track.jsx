import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';

import { color } from '../../functions/providers/ColorContext';

const data = [
    {
      name: "Rate Your Mood",
    },
    {
      name: "Rate Your Anxiety",
    },
    {
      name: "Rate Your Energy",
    },
    {
        name: "Rate Your Activity"
    },
  ];

export default function Track(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Track</Text>
            <FlatList
        style={{ width: '90%' }}
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <Text>{item.name}</Text>
              {/* <View style={styles.graph}>
                <Text>Graph</Text>
              </View> */}
            </View>
          );
        }}
      />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.button}
            >
                <Text style={{
                    fontSize: 20,
                    color: color.inactive
                }}>
                    
                    Complete</Text>
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
        height: 40,
        width: 175,
        borderRadius: 10,
        backgroundColor: color.primary,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute", 
        bottom: 0,
        marginBottom: "5%"
    }
  });