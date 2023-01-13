import React, {Component} from "react";
import {StatusBar, StyleSheet} from 'react-native';
import {StatusBar as ExpoBar} from 'expo-status-bar';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './src/Support/ColorPalette';
import Stopwatch from "./src/Screens/Stopwatch";
import Settings from "./src/Screens/Settings";
import Alarms from "./src/Screens/Alarms";
import Timer from "./src/Screens/Timer";
import * as TaskManager from 'expo-task-manager';
import * as Notifications from "expo-notifications";

const Tab = createBottomTabNavigator();

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
        priority: Notifications.AndroidNotificationPriority.MAX,
    }),
});

class App extends Component {
    state = {};

    async componentDidMount() {
        await Notifications.setNotificationChannelAsync('alarms', {
            name: 'Alarms',
            importance: Notifications.AndroidImportance.MAX,
            lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
            vibrationPattern: [250,0,250,0],
            enableVibrate: true,
            enableLights: true,
            bypassDnd: true,
        });

        // console.log((await Notifications.getNotificationChannelAsync('alarms')).vibrationPattern);
    }

    render() {
        return (
            <>
                <ExpoBar style="light" backgroundColor={Colors.background}/>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{
                        tabBarHideOnKeyboard: true,
                        headerShown: false,
                        tabBarActiveTintColor: Colors.accent,
                        tabBarActiveBackgroundColor: Colors.active,
                        tabBarLabelStyle: {fontSize: 12, marginBottom: 5},
                        tabBarStyle: {backgroundColor: Colors.background, borderTopColor: 'black'},
                    }} sceneContainerStyle={styles.container}>
                        <Tab.Screen name="Alarms" component={Alarms} options={{
                            tabBarIcon: () => <Ionicons name="alarm-outline" size={24} color={Colors.text}/>
                        }}/>
                        <Tab.Screen name="Stopwatch" component={Stopwatch} options={{
                            tabBarIcon: () => <Ionicons name="stopwatch-outline" size={24} color={Colors.text}/>
                        }}/>
                        <Tab.Screen name="Timer" component={Timer} options={{
                            tabBarIcon: () => <Ionicons name="hourglass-outline" size={24} color={Colors.text}/>
                        }}/>
                        <Tab.Screen name="Settings" component={Settings} options={{
                            tabBarIcon: () => <Ionicons name="settings-outline" size={24} color={Colors.text}/>
                        }}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 0,
    }
});

export default App;