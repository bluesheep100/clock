import React, {Component} from "react";
import {SafeAreaView, Vibration, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Support/ColorPalette';

class Button extends Component {
    triggerPress = () => {
        Vibration.vibrate(40);
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity style={[styles.button, {...this.props.style}]} activeOpacity={0.5}
                              onPress={this.triggerPress}>
                <Text style={styles.btnText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

class Timer extends Component {
    state = {
        time: '000000',
    }

    addTime = (digit) => {
        let newTime = this.state.time.replace(/^0+/g, '') + digit;
        if (newTime.length >= 6) {
            newTime = newTime.slice(0, 6);
        }

        this.setState({time: newTime.padStart(6, '0')})
    }

    backspace = () => {
        this.setState({time: this.state.time.slice(0, -1).padStart(6, '0')});
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.row, {paddingBottom: 20}]}>
                    <View style={styles.col}>
                        <Text style={styles.timerText}>{this.state.time.slice(0, 2)}h</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.timerText}>{this.state.time.slice(2, 4)}m</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.timerText}>{this.state.time.slice(4, 6)}s</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Button text="1" onPress={() => this.addTime('1')}/>
                    <Button text="2" onPress={() => this.addTime('2')}/>
                    <Button text="3" onPress={() => this.addTime('3')}/>
                </View>
                <View style={styles.row}>
                    <Button text="4" onPress={() => this.addTime('4')}/>
                    <Button text="5" onPress={() => this.addTime('5')}/>
                    <Button text="6" onPress={() => this.addTime('6')}/>
                </View>
                <View style={styles.row}>
                    <Button text="7" onPress={() => this.addTime('7')}/>
                    <Button text="8" onPress={() => this.addTime('8')}/>
                    <Button text="9" onPress={() => this.addTime('9')}/>
                </View>
                <View style={styles.row}>
                    <Button text="00" onPress={() => this.addTime('00')}/>
                    <Button text="0" onPress={() => this.addTime('0')}/>
                    <Button text={<Ionicons name="backspace-outline" size={42}/>}
                            style={{backgroundColor: Colors.secondary}} onPress={this.backspace}/>
                </View>
                <View style={styles.row}>
                    <Button text={<Ionicons name="play-outline" size={42}/>} style={{backgroundColor: Colors.primary}}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'flex-end',
        paddingHorizontal: 50,
        paddingBottom: 20,
        flex: 1,
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        marginBottom: 5,
    },
    col: {
        flex: 1,
        alignItems: 'center',
    },
    timerText: {
        color: Colors.text,
        fontSize: 42,
    },
    btnText: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: Colors.text,
        fontSize: 32,
        flexGrow: 1,
    },
    button: {
        backgroundColor: Colors.button,
        borderRadius: 100,
        height: 75,
        width: 75,
        margin: 2,
    },
    playBtn: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        height: 75,
        width: 75,
    },
});

export default Timer;
