import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator, TransitionPresets } from "react-navigation-stack";

import Recent from "../../screens/Journals/Recent";
import Starred from "../../screens/Journals/Starred";
import Private from "../../screens/Journals/Private";
import Journal from "../../screens/Journals/Journal";
import Track from "../../screens/Moods/Track";
import { colorScheme } from "../../styles/colorScheme";

const screens = {
    Recent: {
        screen: Recent,
        navigationOptions: () => {
            return {
                headerShown: false,
            }
        }
    },
    Starred: {
        screen: Starred,
        navigationOptions: () => {
            return {
                headerShown: false,
            }
        }
    },
    Private: {
        screen: Private,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    }
}

const JournalsTabs = createMaterialTopTabNavigator(screens, {
    initialRouteName: "Recent",
    tabBarPosition: "top",
    headerShown: true,
    timingConfig: 0,
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: colorScheme.highlight,
        inactiveTintColor: colorScheme.primaryText,
        style: {
          backgroundColor: colorScheme.primary,
        },
        labelStyle: {
            fontSize: 16
        },
        indicatorStyle: {
            backgroundColor: colorScheme.highlight
        }
    }
})

const Journals = createStackNavigator({
    Journals: {
        screen: JournalsTabs
    },
    Journal: {
        screen: Journal,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    TrackJournal: {
        screen: Track,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    }
}, {
    initialRouteName: "Journals",
    defaultNavigationOptions: {
        ...TransitionPresets.FadeFromBottomAndroid
    }
})

export default createAppContainer(Journals);