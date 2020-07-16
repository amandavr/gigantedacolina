import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';




import Home from './pages/Home';
import Lojas from './pages/Lojas';
import Product from './pages/Product';
import LojaWhats from './pages/LojaWhats';



const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#666',
          activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000',
          style: {
            // paddingTop: 20,
            // paddingBottom: 20,
            height: 80
          },
          labelStyle: {
              fontSize: 15,
              marginBottom: 10,
              // marginTop: 10
            },
        }}
        >
          <Tab.Screen name="Produtos" component={ Home }  
          // style={styles.menuIcon}
          options={{
              tabBarLabel: 'Produtos',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shopping" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="Lojas" component={ Lojas }   
            // style={styles.menuIcon}
            options={{
              tabBarLabel: 'Lojas',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="store" color={color} size={size} />
              ),
            }}
          />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function Routes() {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'gigante', headerShown: false }}/>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="LojaWhats" component={LojaWhats} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  // menuIcon: {
  //     marginTop: 50,
  // }
});