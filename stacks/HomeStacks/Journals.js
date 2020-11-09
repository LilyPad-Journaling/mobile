import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator, TransitionPresets } from "react-navigation-stack";

import Recent from "../../screens/Journals/Recent";
import Starred from "../../screens/Journals/Starred";
import Private from "../../screens/Journals/Private";
import Journal from "../../screens/Journals/Journal";
import Track from "../../screens/Moods/Track";
import { color } from "../../functions/providers/ColorContext";
import generalStyles from "../../styles/generalStyles";

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
        activeTintColor: color.highlight,
        inactiveTintColor: color.primaryText,
        style: {
          backgroundColor: color.primary,
          ...generalStyles.shadow
        },
        labelStyle: {
            fontSize: 18,
            fontFamily: 'medium'
        },
        indicatorStyle: {
            backgroundColor: color.highlight
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

export default Journals;