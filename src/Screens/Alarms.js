import React, {Component} from "react";
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AlarmList from "../Components/AlarmList";
import Colors from '../Support/ColorPalette';

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
        backgroundColor: Colors.background,
        paddingTop: 10,
        flex: 1,
    }
});

export default Alarms;
