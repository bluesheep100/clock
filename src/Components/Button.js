import React, {Component} from "react";
import {Text, Pressable, Vibration, StyleSheet, Animated} from "react-native";
import Colors from "../Support/ColorPalette";

class Button extends Component {
    constructor(props) {
        super(props);

        this.pressAnim = React.useRef(new Animated.Value(1)).current;
    }

    triggerPress = () => {
        if (this.props.vibration) {
            Vibration.vibrate(40);
        }

        this.props.onPress();
    }

    onPressIn = () => {
        Animated.timing(this.pressAnim, {
            toValue: 0.5,
            duration: 0.2,
        }).start();
    }

    onPressOut = () => {

    }

    render() {
        return (
            <Animated.View>
                <Pressable style={[styles.button, {opacity: this.pressAnim}, {...this.props.style}]} activeOpacity={0.5}
                           onPress={this.triggerPress} onPressIn={}>
                    {this.props.children}
                </Pressable>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.button,
    },
});

export default Button;
