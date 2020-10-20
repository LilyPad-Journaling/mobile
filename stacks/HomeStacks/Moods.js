import { createAppContainer } from "react-navigation";
import { createStackNavigator, TransitionPresets } from "react-navigation-stack";

import Analysis from "../../screens/Moods/Analysis";
import Track from "../../screens/Moods/Track";

const screens = {
    Analysis: {
        screen: Analysis,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    Track: {
        screen: Track,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    }
}

const Moods = createStackNavigator(screens, {
    initialRouteName: "Analysis",
    defaultNavigationOptions: {
        ...TransitionPresets.FadeFromBottomAndroid
    }
})

export default createAppContainer(Moods);