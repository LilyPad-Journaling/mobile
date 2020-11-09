import React from "react";
import { FontAwesome as Icon } from '@expo/vector-icons/';
import {
    Text, View, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import * as Linking from 'expo-linking';

import { color } from '../../functions/providers/ColorContext';

const categories = [
    {
        name: "Stress Relief",
        contents: [
            {
                title: "8 ways to calm anxious thoughts",
                source: "Medical News Today",
                url: "https://www.medicalnewstoday.com/articles/326115",
                starred: true
            },
            {
                title: "8 Breathing Exercises to Try When You Feel Anxious",
                source: "Healthline",
                url: "https://www.healthline.com/health/breathing-exercises-for-anxiety",
                starred: false
            },
            {
                title: "50 Surprisingly Simple Coping Mechanisms To Chase Away Anxiety",
                source: "Thought Catalog",
                url: "https://thoughtcatalog.com/january-nelson/2019/01/50-surprisingly-simple-coping-mechanisms-to-chase-away-anxiety/",
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
                url: "https://www.google.com/search?sxsrf=ALeKk00HdKw6tszuba8PcHJP2gxt40ZlqQ%3A1604820779370&source=hp&ei=K5-nX8GaEPKg_QaZy4ywBQ&q=sports&oq=sports&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIKCC4QxwEQowIQQzIECAAQQzoECCMQJzoFCAAQkQI6CAgAELEDEIMBOggILhCxAxCDAToCCAA6BAguECc6BwguECcQkwI6BAguEENQ7ARYjAtg9wxoAHAAeACAAaUCiAGDCpIBBTAuMy4zmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiB3Oejt_LsAhVyUN8KHZklA1YQ4dUDCAk&uact=5",
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
                url: "https://en.wikipedia.org/wiki/Ohm",
                starred: false
            }
        ]
    },
    {
        name: "Yoga",
        contents:  [
            {
                title: "16 Yoga Poses to Find Instant Calm and Peace",
                source: "yoga journal",
                url: "https://www.yogajournal.com/practice/16-yoga-poses-find-instant-calm-peace",
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
                                                    <Text style={styles.title}
                                                        onPress={() => Linking.openURL(item.url)}
                                                    >
                                                        {item.title}
                                                    </Text>
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
        width: "95%",
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