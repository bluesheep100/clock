import React, {Component} from "react";
import {SafeAreaView, Text, StyleSheet} from 'react-native';

class Stopwatch extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Stopwatch functionality goes here :D</Text>
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

export default Stopwatch;
