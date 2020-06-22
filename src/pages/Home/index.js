import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { createStackNavigator } from "@react-navigation/stack"



export default class Home extends Component {

    static navigationOptions = {
        title: 'teste',
    };


    state = {
        data: [
            {
                id: '01',
                title: 'Camisa Escudo Vasco Coroa - VG',
                price: 'R$ 19,90',
                image: 'https://assets.xtechcommerce.com/uploads/images/medium/f1ca9c305c3d2ee02e14dd8f5521a633.jpg',
                buttonWhats: 'COMPRAR NA LOJA',
                buttonWhatsUrl: 'https://linktr.ee/lojasgigantedacolina',
                buttonSite: 'COMPRAR NO SITE',
                buttonSiteUrl: 'https://loja.cariocasfc.com.br/futebol/vasco-da-gama',
              },
              {
                id: '02',
                title: 'Camisa ',
                price: 'R$ 19,90',
                image: 'https://assets.xtechcommerce.com/uploads/images/medium/f1ca9c305c3d2ee02e14dd8f5521a633.jpg',
                buttonWhats: 'COMPRAR NA LOJA',
                buttonWhatsUrl: 'https://linktr.ee/lojasgigantedacolina',
                buttonSite: 'COMPRAR NO SITE',
                buttonSiteUrl: 'https://bit.ly/2Nh8wtJ',
            },
        ]
    };

    renderItem = ({ item }) => (

        <View style={styles.row}>
                <View style={styles.image}>
                    <Image source={{ uri: item.image }}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity style={styles.button} 
                        onPress={() => { 
                            this.props.navigation.navigate("Product", { product: item }); 
                            // navigation.navigate('Product')
                        }}
                    >
                        <Text style={styles.buttonTxt} >{item.buttonSite}</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.button} 
                        onPress={() => { 
                            this.props.navigation.navigate("LojaWhats", { product: item }); 
                            // navigation.navigate('Product')
                        }}
                    >
                        <Text style={styles.buttonTxt}>{item.buttonWhats}</Text>
                    </TouchableOpacity>  
                </View>
            </View>
    )


    render () {

        return (
            <View>
                <FlatList
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding:20
    },
    image: {

    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#bc8e11'
    },
    button: {
        borderRadius: 5,
        backgroundColor:'#000',
        padding: 10,
        margin: 10,
    },
    buttonTxt: {
        color: '#fff',
        fontWeight: 'bold'
    }
});




