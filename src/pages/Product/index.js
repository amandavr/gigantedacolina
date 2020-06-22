import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';



const Product = () => {
    const { params } = useRoute();


    return (

        <WebView source={{ uri: params.product.buttonSiteUrl }} />
        // <Text>{params.product.buttonSiteUrl}</Text>
        // <Text>produtoooo</Text>
        
    )
 }

 export default Product;