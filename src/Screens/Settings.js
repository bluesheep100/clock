import React, {Component} from "react";
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../Support/ColorPalette';

class Settings extends Component {
    state = {
        settings: {

        },
    }

    componentDidMount() {
        AsyncStorage.getItem('settings').then(data => this.setState({settings: data}));
    }

    saveSettings() {
        AsyncStorage.setItem('settings', JSON.stringify(this.state.settings));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Settings Page :D</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingTop: 10,
        flex: 1,
    },
    text: {
        color: Colors.text
    },
});

export default Settings;
