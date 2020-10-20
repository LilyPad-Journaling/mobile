import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Intro from "../screens/SignIn/Intro";
import Login from "../screens/SignIn/Login";
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
    Login: {
        screen: Login,
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
export default createAppContainer(SignIn);