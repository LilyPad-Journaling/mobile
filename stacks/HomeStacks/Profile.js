import { createAppContainer } from "react-navigation";
import { createStackNavigator, TransitionPresets } from "react-navigation-stack";

import Settings from "../../screens/Profile/Settings";

const screens = {
    Settings: {
        screen: Settings,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    }
}

const Profile = createStackNavigator(screens, {
    initialRouteName: "Settings",
    defaultNavigationOptions: {
        ...TransitionPresets.FadeFromBottomAndroid
    }
})

export default createAppContainer(Profile);