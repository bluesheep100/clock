import React, {Component} from "react";
import {SafeAreaView, StyleSheet, Text, View, Animated} from 'react-native';
import Button from '../Components/Button';
import Colors from "../Support/ColorPalette";

class Stopwatch extends Component {
    state = {
        timeStart: null,
        timeEnd: null,
        time: 0,
    }

    startTime = () => {
        if (this.intervalId) {
            return;
        }

        this.setState({timeStart: new Date()});
        this.intervalId = setInterval(() => {
            this.setState({
                time: this.state.timeStart !== null ? Date.now() - this.state.timeStart : 0,
            });
        }, 20);
    }

    stopTime = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({timeStart: null});
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <Button onPress={this.startTime} style={{padding: 10, marginBottom: 10}}>
                        <Text style={styles.text}>Start</Text>
                    </Button>

                    <Button onPress={this.stopTime} style={{padding: 10, marginBottom: 10}}>
                        <Text style={styles.text}>Stop</Text>
                    </Button>

                    <Text style={styles.text}>
                        {this.state.time}
                    </Text>
                </View>
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
    row: {
        justifyContent: 'center',
        // flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
    },
    startButton: {
        // backgroundColor:
    },
    text: {color: '#fefefe'}
});

export default Stopwatch;
