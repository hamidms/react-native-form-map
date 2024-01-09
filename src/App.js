import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import MapScreen from "./screens/MapScreen";
 
const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={34} color={'black'} />
                  ),
                }}
              />
              <Tab.Screen
                name="Form"
                component={FormScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="article" size={34} color={'black'} />
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="map" size={34} color={'black'} />
                  ),
                }}
              />
            </Tab.Navigator>
        </NavigationContainer>        
      );
}
