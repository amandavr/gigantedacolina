import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';


export default class Lojas extends Component {

    render () {
        return (
            // <View>
            //     <Text> lojas </Text>
            // </View>
             <WebView source={{ uri: 'http://lojasgigantedacolina.com.br/index_old.html' }} />
        );
    }
}
