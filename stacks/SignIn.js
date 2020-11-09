import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Intro from "../screens/SignIn/Intro";
import Name from "../screens/SignIn/Name";
import Number from "../screens/SignIn/Number";
import Verify from "../screens/SignIn/Verify";
import Onboarding from "../screens/SignIn/Onboarding";

const screens = {
    Intro: {
        screen: Intro,
        navigationOptions: () => {
            return {
                headerShown: false,
                gestureEnabled: false,
            }
        }
    },
    Name: {
        screen: Name,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    Number: {
        screen: Number,
        navigationOptions: () => {
            return {
                headerShown: false
            }
        }
    },
    Verify: {
        screen: Verify,
        navigationOptions: () => {
            return {
                headerShown: false,
                gestureEnabled: false
            }
        }
    },
    Onboarding: {
        screen: Onboarding,
        navigationOptions: () => {
            return {
                headerShown: false,
                gestureEnabled: false
            }
        }
    }
}

const SignIn = createStackNavigator(screens);
export default SignIn;