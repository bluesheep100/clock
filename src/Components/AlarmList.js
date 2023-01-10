import React, {Component} from "react";
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import TimeInput from './TimeInput';
import Alarm from './Alarm';
import uuid from 'react-native-uuid';
import Colors from '../Support/ColorPalette';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

const DATA = [
    {
        id: 1,
        time: '7:00',
        isEnabled: true,
    },
    {
        id: 2,
        time: '7:05',
        isEnabled: true,
    },
    {
        id: 3,
        time: '7:10',
        isEnabled: false,
    },
];

class AlarmList extends Component {
    state = {
        alarms: [],
        time: '00:00',
        modalVisible: false,
    }

    constructor(props) {
        super(props);

        this.timeInput = React.createRef();
    }

    componentDidMount() {
        AsyncStorage.getItem('alarms').then(value => {
            this.setState({alarms: JSON.parse(value)})
        });
    }

    saveAlarms() {
        AsyncStorage.setItem('alarms', JSON.stringify(this.state.alarms));
    }

    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    focusHours = () => {
        this.timeInput.current.focusHours();
    }

    setTime = (time) => {
        this.setState({time});
    }

    createAlarm = () => {
        this.toggleModal();

        this.setState(
            {alarms: [...this.state.alarms, {id: uuid.v4(), time: this.state.time, isEnabled: true}]},
            () => this.saveAlarms()
        );
    }

    updateAlarm = (newData) => {
        const alarms = this.state.alarms.map((alarm) => {
            return alarm.id === newData.id ? newData : alarm;
        });
        this.setState({alarms}, () => this.saveAlarms());
    }

    deleteAlarm = (deleted) => {
        const alarms = this.state.alarms.filter((alarm) => {
            return alarm.id !== deleted.id;
        });
        this.setState({alarms});
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.modalVisible} onModalWillHide={() => this.timeInput.current.blur()}
                       onShow={() => {
                           setTimeout(() => {
                               this.focusHours();
                           }, 100);
                       }}>
                    <View style={styles.modalView}>
                        <View style={{margin: 30}}>
                            <TimeInput ref={this.timeInput} onChange={this.setTime}/>
                        </View>

                        <View style={styles.modalFooter}>
                            <Pressable style={styles.modalBtn} onPress={this.toggleModal}>
                                <Text style={{color: Colors.accent, fontSize: 14}}>Cancel</Text>
                            </Pressable>
                            <Pressable style={styles.modalBtn} onPress={this.createAlarm}>
                                <Text style={{color: Colors.accent, fontSize: 14}}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <FlatList
                    data={this.state.alarms}
                    renderItem={({item}) => (<Alarm alarm={item} onChange={this.updateAlarm} onDelete={this.deleteAlarm}/>)}
                    keyExtractor={item => item.id}
                />

                <View style={styles.newAlarmView}>
                    <Pressable
                        style={({pressed}) => [
                            styles.button,
                            pressed ? {backgroundColor: Colors.buttonPressed} : {},
                        ]}
                        onPress={this.toggleModal}
                    >
                        <Ionicons name="add-circle-outline" color={Colors.accent} size={36}/>
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
        backgroundColor: Colors.button,
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
    modalView: {
        backgroundColor: Colors.backgroundTwo,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalFooter: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        paddingEnd: 10,
        paddingBottom: 10,
    },
    modalBtn: {
        padding: 10,
    },
});

export default AlarmList;
