import React from "react";

import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import Header from "../components/Header";

import { FontAwesome5 } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home") {
            return (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? "red" : "grey"}
              />
            );
          } else if (route.name == "Setting") {
            return (
              <FontAwesome5
                name="user-circle"
                size={24}
                color={focused ? "red" : "grey"}
              />
            );
          }
        },
      })}
    >
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
        }}
        name="Setting"
        component={SettingScreen}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabNavigator;
