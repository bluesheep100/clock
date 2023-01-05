import React, {Component} from "react";
import {StyleSheet, Text, View, Pressable, Switch} from 'react-native';
import Colors from '../Support/ColorPalette';
import Ionicons from "@expo/vector-icons/Ionicons";

class Alarm extends Component
{
    state = {
        isEnabled: this.props.enabled,
    }

    toggleEnabled = (newState) => {
        this.setState({isEnabled: newState});
    }

    render() {
        return(
            <View style={styles.alarm}>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{this.props.time}</Text>
                    <Text style={styles.text}>Mon, Tue, Wed, Thu, Fri</Text>

                    {/*<Pressable style={styles.deleteBtn}>*/}
                    {/*    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>*/}
                    {/*        <Ionicons name="trash-outline" size={18} color="#f0f0f0"/>*/}
                    {/*        Delete*/}
                    {/*    </Text>*/}
                    {/*</Pressable>*/}
                </View>
                <View style={{flex: 1}}>
                    <Switch
                        trackColor={{ false: Colors.switchTrack, true: Colors.switchTrackActive }}
                        thumbColor={this.state.isEnabled ? Colors.switchThumbActive : Colors.switchThumb}
                        onValueChange={this.toggleEnabled}
                        value={this.state.isEnabled}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    alarm: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Colors.backgroundTwo,
        padding: 12,
        borderRadius: 10,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 40,
        color: Colors.text,
    },
    text: {
        color: Colors.text,
    },
    deleteBtn: {
        marginTop: 10,
    },
});

export default Alarm;
