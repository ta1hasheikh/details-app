import React from "react";

import HomeScreen from "../screens/HomeScreen";
import Calender from "../screens/Calender";

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
                name="search"
                size={24}
                color={focused ? "red" : "grey"}
              />
            );
          } else if (route.name == "Calender") {
            return (
              <FontAwesome5
                name="calendar-alt"
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
        name="Calender"
        component={Calender}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabNavigator;
