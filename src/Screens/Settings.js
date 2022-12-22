import React, {Component} from "react";
import {SafeAreaView, Text, StyleSheet} from 'react-native';

class Settings extends Component {
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
        backgroundColor: '#011627',
        paddingTop: 10,
        flex: 1,
    },
    text: {color: '#fefefe'}
});

export default Settings;
