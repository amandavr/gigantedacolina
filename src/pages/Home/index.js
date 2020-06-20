import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends Component {






    render () {
        return (
            <View>
                <Text> home </Text>
              
            </View>
        );
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        borderColor: '#DDD',
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 10,
        padding:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemState: {
        fontSize: 16,
        color: '#616161',
    },
    itemCases: {
        fontSize: 30,
        fontWeight: '600',
        color: '#7159c1',
    },
    itemButton:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#7159c1',
        padding:10,
        alignItems: 'center',
    },
    itemButtonText: {
        
    },
    itemCol1: {
        flex: 1
    }
});
