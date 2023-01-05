import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from "../Support/ColorPalette";

class TimeInput extends Component {
    state = {
        hours: '00',
        minutes: '00',
    }

    constructor(props) {
        super(props);

        this.hoursField = React.createRef();
        this.minutesField = React.createRef();
        this.focusMinutes = this.focusMinutes.bind(this);
    }

    focusMinutes(text) {
        if (text.length === 2) {
            this.minutesField.current.focus();
        }
    }

    focusHours = () => {
        this.hoursField.current.focus();
        this.setState({hours: '00'});
    }

    blur = () => {
        this.hoursField.current.blur();
        this.minutesField.current.blur();
    }

    onBlur(text) {
        return text.length === 0 ? '00' : text;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        onChangeText={(text) => {
                            if (Number.parseInt(text) > 24) {
                                this.setState({hours: '24'});
                            } else {
                                this.setState({hours: text});
                            }
                            this.focusMinutes(text);
                        }}
                        onBlur={() => this.setState({hours: this.onBlur(this.state.hours)})}
                        selectTextOnFocus={true}
                        ref={this.hoursField}
                        value={this.state.hours}
                        keyboardType="numeric"
                        maxLength={2}
                        textAlign="center"
                        style={[styles.input, this.hoursField.current?.isFocused() ? styles.focused : {}]}
                    />
                    <Text style={{fontSize: 12, color: Colors.text}}>Hour</Text>
                </View>
                <Text style={{fontSize: 58, marginHorizontal: 5, color: Colors.textDark}}>:</Text>
                <View>
                    <TextInput
                        onChangeText={(text) => {
                            this.setState({minutes: text});
                        }}
                        onBlur={() => this.setState({minutes: this.onBlur(this.state.minutes)})}
                        ref={this.minutesField}
                        value={this.state.minutes}
                        selectTextOnFocus={true}
                        keyboardType="numeric"
                        maxLength={2}
                        textAlign="center"
                        style={[styles.input, this.minutesField.current?.isFocused() ? styles.focused : {}]}
                    />
                    <Text style={{fontSize: 12, color: Colors.text}}>Minute</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        color: Colors.text,
        backgroundColor: Colors.input,
        width: 85,
        height: 90,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 46,
    },
    focused: {
        color: Colors.textDark,
        backgroundColor: Colors.backgroundTwo,
        borderColor: Colors.accent,
        borderWidth: 1,
    }
});

export default TimeInput;
