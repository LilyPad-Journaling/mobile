import React from "react";
import { FontAwesome as Icon } from '@expo/vector-icons/';
import {
    Text, View, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';

import { color } from '../../functions/providers/ColorContext';

const categories = [
    {
        name: "Stress Relief",
        contents: [
            {
                title: "8 ways to calm anxious thoughts",
                source: "Medical News Today",
                url: "http://blahblhabhfjkasdfhkals",
                starred: true
            },
            {
                title: "4 useful breathing techniques",
                source: "Thought Catalog",
                url: "http://blahblhabhfjkasdfhkals",
                starred: false
            }
        ]
    },
    {
        name: "Motivation",
        contents:  [
            {
                title: "Woo you can do it",
                source: "The Sportsball Motivator",
                url: "http://google.com",
                starred: false
            }
        ]
    },
    {
        name: "Meditation",
        contents:  [
            {
                title: "Ohmmmmmmm",
                source: "Resistance is Futile",
                url: "http://ieee.org",
                starred: false
            }
        ]
    },
    {
        name: "Yoga",
        contents:  [
            {
                title: "Best Calming Yoga Positions",
                source: "Planet Fitness",
                url: "http://planetfitness.com",
                starred: false
            }
        ]
    },
  ];

export default function General(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <FlatList //flatlist of categories
                style={{width:"95%"}}
                data={categories}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => {
                    return (
                        <View style={styles.categoryContainer}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10
                            }}>
                                <Text style={styles.category}>{item.name}</Text>
                                <TouchableOpacity
                                    onPress={() => console.log("Open sesame")}>
                                    <Icon
                                        name="chevron-up"
                                        color={color.primaryText}
                                        size={32}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contentContainer}>
                                <FlatList
                                    style={{width:"99%"}}
                                    data={item.contents}
                                    keyExtractor={(item) => item.title}
                                    renderItem={({item}) => {
                                        return (
                                            <View style={{
                                                flexDirection: "row"
                                            }}>
                                                <TouchableOpacity style={{
                                                    justifyContent: "center",
                                                    paddingRight: 5
                                                }}
                                                    onPress={() => console.log("Open sesame")}>
                                                    <Icon
                                                        name="star"
                                                        color={color.primaryText}
                                                        size={32}
                                                    />
                                                </TouchableOpacity>
                                                <View style={styles.categoryContainer}>
                                                <TouchableOpacity>
                                                    <Text style={styles.title}>{item.title}</Text>
                                                    <Text style={styles.source}>{item.source}</Text>
                                                </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                                {/* <Text>see more...</Text> */}
                            </View>
                        </View>
                    )
                }}
            />
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
    categoryContainer: {
        backgroundColor: color.primary,
        // width: "95%",
        borderRadius: 15,
        padding: 5,
        marginTop: 10
    },
    category: {
        fontSize: 36,
        color: color.primaryText
    },
    contentContainer: {
        // width: "95%",
        // borderRadius: 25,
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: color.primaryText
    },
    dropdownArrow: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: color.highlight,
        alignItems: "flex-end",
        justifyContent: "flex-start",
        right: 10,
    },
    title: {
        fontSize: 24,
        color: color.primaryText
    },
    source: {
        fontSize: 16,
        color: color.inactive,
    }
  });