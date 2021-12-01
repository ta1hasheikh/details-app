import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "light"}
        backgroundColor={Platform.OS === "android" ? "red" : "#ffffff"}
        translucent={Platform.OS === "ios" ? true : false}
      />
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
