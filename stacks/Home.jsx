import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { TransitionPresets } from "react-navigation-stack";
import { FontAwesome as Icon } from '@expo/vector-icons/';

import Journals from "./HomeStacks/Journals";
import Moods from "./HomeStacks/Moods";
import Resources from "./HomeStacks/Resources";
import Profile from "./HomeStacks/Profile";
import { color } from "../functions/providers/ColorContext";
import { navigationStyles } from "../styles/navigationStyles";
import { showNav } from "../functions/util/navigation";

const tabHeight = (Platform.OS === 'ios')? 40 : 25;

const screens = {
    Journals: {
        screen: Journals,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: showNav(navigation),
                tabBarVisible: showNav(navigation),
                gestureEnabled: false,
                title: "",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="pencil"
                        color={tintColor}
                        size={32}
                    />
                )
            }
        }
    },
    Moods: {
        screen: Moods,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: showNav(navigation),
                tabBarVisible: showNav(navigation),
                gestureEnabled: false,
                title: "",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="user"
                        color={tintColor}
                        size={32}
                    />
                )
            }
        }
    },
    Resources: {
        screen: Resources,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: showNav(navigation),
                tabBarVisible: showNav(navigation),
                gestureEnabled: false,
                title: "",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="link"
                        color={tintColor}
                        size={32}
                    />
                )
            }
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: showNav(navigation),
                tabBarVisible: showNav(navigation),
                gestureEnabled: false,
                title: "",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="user"
                        color={tintColor}
                        size={32}
                    />
                )
            }
        }
    }
}

const Home = createMaterialTopTabNavigator(screens, {
    initialRouteName: "Journals",
    tabBarPosition: "bottom",
    timingConfig: 0,
    navigationOptions: {
        gestureEnabled: false
    },
    gestureEnabled: false,
    tabBarOptions: {
        activeTintColor: color.highlight,
        inactiveTintColor: color.inactive,
        style: [navigationStyles.footer],
        indicatorStyle: {
            height: 0
        },
        showIcon: true,
        iconStyle: [
            {
                height: tabHeight,
                alignItems: "center",
                shadowRadius: 0.3
            }
        ]
    }
});

export default createAppContainer(Home);