import React, {Component} from "react";
import {StatusBar, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Stopwatch from "./src/Screens/Stopwatch";
import Settings from "./src/Screens/Settings";
import Alarms from "./src/Screens/Alarms";
import Timer from "./src/Screens/Timer";

const Tab = createBottomTabNavigator();

class App extends Component {
    state = {};

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#7fdbca',
                    tabBarActiveBackgroundColor: '#13344f',
                    tabBarLabelStyle: {fontSize: 12, marginBottom: 5},
                    tabBarStyle: {backgroundColor: '#011627', borderTopColor: '#000'},
                }} sceneContainerStyle={styles.container}>
                    <Tab.Screen name="Alarms" component={Alarms} options={{
                        tabBarIcon: () => <Ionicons name="alarm-outline" size={24} color="#f0f0f0"/>
                    }}/>
                    <Tab.Screen name="Stopwatch" component={Stopwatch} options={{
                        tabBarIcon: () => <Ionicons name="stopwatch-outline" size={24} color="#f0f0f0"/>
                    }}/>
                    <Tab.Screen name="Timer" component={Timer} options={{
                        tabBarIcon: () => <Ionicons name="hourglass-outline" size={24} color="#f0f0f0"/>
                    }}/>
                    <Tab.Screen name="Settings" component={Settings} options={{
                        tabBarIcon: () => <Ionicons name="settings-outline" size={24} color="#f0f0f0"/>
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default App;