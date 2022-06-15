import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//screens
import HomeScreen from './screens/Home';
import Clothes from './screens/Clothes';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName='Register' shifting={true} keyboardHidesNavigationBar={true}>
      <Tab.Screen 
      name="Login" 
      component={HomeScreen}
      options={{
        tabBarIcon: 'home',
        tabBarColor: 'white',

        }}/>

      <Tab.Screen
       name="Register" 
       component={Clothes}
       options={{
        tabBarIcon: 'wardrobe',
        tabBarColor: 'white',
         
       }}
       />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
