import React, { Component } from "react";
import { Text, View } from "react-native";
import {enableLatestRenderer} from 'react-native-maps';


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import MapScreen from "./screens/MapScreen";
 
const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Form" component={FormScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        
      );
}
