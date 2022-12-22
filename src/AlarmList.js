import React, {Component} from "react";
import {Alert, FlatList, Modal, Pressable, StyleSheet, View, Text} from 'react-native';
import Alarm from "./Alarm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

const DATA = [
    {
        id: '1',
        time: '8:00',
        enabled: true,
    },
    {
        id: '2',
        time: '8:05',
        enabled: true,
    },
    {
        id: '3',
        time: '8:10',
        enabled: false,
    },
];

class AlarmList extends Component {
    state = {
        alarms: DATA,
        modalVisible: false,
    }

    componentDidMount() {
        // AsyncStorage.getItem('alarms').then(value => {
        //     this.setState({alarms: JSON.parse(value)})
        // });
    }

    setModalVisible = value => {
        this.setState({modalVisible: value});
    }

    renderItem({item}) {
        return (<Alarm time={item.time} enabled={item.enabled}/>)
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={styles.button}
                                onPress={() => this.setModalVisible(false)}
                            >
                                <Text>Hide</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <FlatList
                    data={this.state.alarms}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />

                <View style={styles.newAlarmView}>
                    <Pressable
                        style={[styles.button]}
                        onPress={() => this.setModalVisible(true)}
                    >
                        <Ionicons name="add-circle-outline" color="white" size={32}/>
                        {/*<Text style={{color: '#fff'}}>Show Modal</Text>*/}
                    </Pressable>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#82aaff',
        borderRadius: 10,
        padding: 5,
        elevation: 2
    },
    newAlarmView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginBottom: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default AlarmList;
