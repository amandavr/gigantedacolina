import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



import Home from './pages/Home';
import Lojas from './pages/Lojas';


const Tab = createBottomTabNavigator();


export default function Routes() {
    return (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#666',
                activeBackgroundColor: '#000',
                inactiveBackgroundColor: '#000',
                labelStyle: {
                    fontSize: 15,
                  },
              }}

              
              >
                <Tab.Screen name="Produtos" component={ Home } 
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="shopping" color={color} size={size} />
                    ),
                  }}
               />
                <Tab.Screen name="Lojas" component={ Lojas }  
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
