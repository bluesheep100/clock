import React, {Component} from "react";
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AlarmList from "../AlarmList";

class Alarms extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AlarmList/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#011627',
        paddingTop: 10,
        flex: 1,
    }
});

export default Alarms;
