import React, { useState } from "react";
import {
    Text, View, TouchableOpacity, StyleSheet, Image, FlatList, TouchableWithoutFeedback, Keyboard, AsyncStorage
} from "react-native";

import { color } from "../../functions/providers/ColorContext";
import { TextInput } from "react-native-gesture-handler";
import { NavigationActions } from "react-navigation";

const image = require("../../assets/X_paint_icon.png");

const Input = props => {
    const { placeholder, keyboardType } = props;
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={color.inactive}
            style={{
                fontSize: 20,
                width: "100%",
                height: "100%",
                marginLeft: 5
            }}
        />)
}

const Circle = props => {
    return (
        <View style={{
            backgroundColor: props.backgroundColor,
            width: 50,
            height: 50,
            borderRadius: 100 / 2
        }} />
    );
}

export default function Settings(props) {
    const data = ["#FF7C7C", "#FFB46F", "#FFE600", "#33E7FF", "#62E06F", "#EA66FF"]
    const { navigation } = props;
    const [backgroundColor, setBg] = useState(color.background);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[styles.container, { backgroundColor }]}>

                <View style={styles.row}>
                    <Text style={styles.text}>Name</Text>
                    <View style={styles.fieldRectangle}>
                        <Input placeholder="John" keyboardType="default" />
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.text}>Phone</Text>
                    <View style={styles.fieldRectangle}>
                        <Input placeholder="(123)-456-7890" keyboardType="phone-pad" />
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.text}>PIN</Text>
                    <View style={styles.fieldRectangle}>
                        <Input placeholder="****" keyboardType="number-pad" />
                    </View>
                </View>

                <Text style={{ ...styles.text, marginTop: 20 }}>Color</Text>

                <View style={styles.row}>

                    <View style={styles.row}>

                        <Image source={image}
                            style={{ marginLeft: 20, width: 50, height: 50 }}
                        />
                        <FlatList
                            contentContainerStyle={styles.colorsRectangle}
                            scrollEnabled={false}
                            data={data}
                            keyExtractor={item => item}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => { setBg(item) }}>
                                        <Circle backgroundColor={item} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View >

                </View >

                <TouchableOpacity onPress={async () => { 
                    // ugly solution to logout / rerender
                    await AsyncStorage.clear();
                    navigation.push("LoadingScreen", {
                        update: Math.random()
                    })
                }}>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>

            </View >
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    text: {
        paddingVertical: 20,
        textAlign: "left",
        fontSize: 20,
        marginLeft: 20
    },
    logout: {
        //position: "absolute",
        top: 320,
        width: "100%",
        textAlign: "center",
        color: "red",
        textDecorationLine: "underline",
        fontSize: 20
    },
    colorsRectangle: {
        width: 320,
        height: 75,
        borderRadius: 10,
        backgroundColor: "white",
        marginLeft: 20,
        flexDirection: "row",
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    fieldRectangle: {
        width: 260,
        height: 30,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "flex-start",
        marginLeft: 100,
        position: "absolute"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
});
