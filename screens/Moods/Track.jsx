import React, { useState, useContext } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import { FontAwesome as Icon } from '@expo/vector-icons/';
import Slider from 'react-native-slider';

import { ColorContext } from '../../functions/providers/ColorContext';
import { UserContext } from '../../functions/providers/UserContext';

export default function Track(props) {
    const { navigation } = props;
    const { color } = useContext(ColorContext);
    const { userID, createMood } = useContext(UserContext);
    const [anxiety, setAnxiety] = useState(5);
    const [anxietyView, setAnxietyView] = useState(0.5);
    const [energy, setEnergy] = useState(5);
    const [energyView, setEnergyView] = useState(0.5);
    const [activity, setActivity] = useState(5);
    const [activityView, setActivityView] = useState(0.5);
    const [stress, setStress] = useState(5);
    const [stressView, setStressView] = useState(0.5);

    const submit = () => {
        createMood(userID, anxiety, energy, activity, stress, () => {
            navigation.goBack()
        });
    };

    return (
        <View
            style={{ ...styles.container, backgroundColor: color.background }}
        >
            <Header navigation={navigation} />
            <View style={{ width: '90%', justifyContent: 'center' }}>
                <View
                    style={{
                        ...styles.sliderspace,
                        backgroundColor: color.backgrounds
                    }}
                >
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>
                        Anxiety
                    </Text>
                    <View>
                        <Slider
                            value={anxietyView}
                            onValueChange={(val) => {
                                setAnxiety(Math.round(val * 100) / 10);
                                setAnxietyView(val);
                            }}
                            thumbStyle={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: color.highlight
                            }}
                            minimumTrackTintColor={color.primaryText}
                            maximumTrackTintColor={color.primary}
                        />
                    </View>
                </View>
                <View
                    style={{
                        ...styles.sliderspace,
                        backgroundColor: color.backgrounds
                    }}
                >
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>
                        Energy
                    </Text>
                    <View>
                        <Slider
                            value={energyView}
                            onValueChange={(val) => {
                                setEnergy(Math.round(val * 100) / 10);
                                setEnergyView(val);
                            }}
                            thumbStyle={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: color.highlight
                            }}
                            minimumTrackTintColor={color.primaryText}
                            maximumTrackTintColor={color.primary}
                        />
                    </View>
                </View>
                <View
                    style={{
                        ...styles.sliderspace,
                        backgroundColor: color.backgrounds
                    }}
                >
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>
                        Activity
                    </Text>
                    <View>
                        <Slider
                            value={activityView}
                            onValueChange={(val) => {
                                setActivity(Math.round(val * 100) / 10);
                                setActivityView(val);
                            }}
                            thumbStyle={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: color.highlight
                            }}
                            minimumTrackTintColor={color.primaryText}
                            maximumTrackTintColor={color.primary}
                        />
                    </View>
                </View>
                <View
                    style={{
                        ...styles.sliderspace,
                        backgroundColor: color.backgrounds
                    }}
                >
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>
                        Stress
                    </Text>
                    <View>
                        <Slider
                            value={stressView}
                            onValueChange={(val) => {
                                setStress(Math.round(val * 100) / 10);
                                setStressView(val);
                            }}
                            thumbStyle={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: color.highlight
                            }}
                            minimumTrackTintColor={color.primaryText}
                            maximumTrackTintColor={color.primary}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    submit()
                }}
                style={{ ...styles.button, backgroundColor: color.primary }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: color.inactive
                    }}
                >
                    Complete
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        height: 40,
        width: 175,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: '5%'
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 0
    },
    headerText: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'regular',
        marginLeft: 25
    },
    sliderspace: {
        height: 125,
        width: '100%',
        marginTop: 20
    }
});

const Header = (props) => {
    const { navigation } = props;
    const { color } = useContext(ColorContext);

    return (
        <View style={{ backgroundColor: color.primary, width: '100%' }}>
            <SafeAreaView>
                <View
                    style={{ ...styles.header, backgroundColor: color.primary }}
                >
                    <TouchableOpacity
                        style={{
                            position: 'relative',
                            left: 5
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            name="chevron-left"
                            color={color.primaryText}
                            size={28}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Mood Tracker</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};
