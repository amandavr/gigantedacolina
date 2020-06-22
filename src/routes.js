import React from 'react';
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



// const Tab = createBottomTabNavigator();

// export default function Routes() {
//     return (
            // <Tab.Navigator
            //   tabBarOptions={{
            //     activeTintColor: '#fff',
            //     inactiveTintColor: '#666',
            //     activeBackgroundColor: '#000',
            //     inactiveBackgroundColor: '#000',
            //     labelStyle: {
            //         fontSize: 15,
            //       },
            //   }}
            //   >
            //     <Tab.Screen name="Produtos" component={ Home } 
            //     options={{
            //         tabBarLabel: 'Produtos',
            //         tabBarIcon: ({ color, size }) => (
            //           <MaterialCommunityIcons name="shopping" color={color} size={size} />
            //         ),
            //       }}
            //    />
            //     <Tab.Screen name="Lojas" component={ Lojas }  
            //      options={{
            //         tabBarLabel: 'Lojas',
            //         tabBarIcon: ({ color, size }) => (
            //           <MaterialCommunityIcons name="store" color={color} size={size} />
            //         ),
            //       }}
            //     />
            // </Tab.Navigator>

//     );
//   }




const Tab = createBottomTabNavigator();

function HomeTabs() {
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

const Stack = createStackNavigator();

export default function Routes() {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="LojaWhats" component={LojaWhats} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}