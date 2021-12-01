import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fontRef, heightRef, widthRef } from "../utils/Dimensions";
import { useState } from "react";
import SettingScreen from "./SettingScreen";
import Calender from "./Calender";
import { List } from "react-native-paper";

const data = [
  { id: 1, text: "School 1", icon: "school" },
  { id: 2, text: "School 2", icon: "school" },
  { id: 3, text: "School 3", icon: "school" },
];

const AddScreen = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [show, setShow] = useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 12 * heightRef : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <List.Accordion
          title="Location"
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item
            title="Lahore"
            onPress={() => navigation.navigate("Setting")}
          />
          <List.Item
            title="Karachi"
            onPress={() => navigation.navigate("Setting")}
          />
          <List.Item
            title="Multan"
            onPress={() => navigation.navigate("Setting")}
          />
        </List.Accordion>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.boxContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  You can also Enter Your Postal Code Here
                </Text>
              </View>
              <View style={styles.searchContainer}>
                <TextInput
                  placeholder="Enter Postal Code"
                  style={styles.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}>
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
    height: 70 * heightRef,
    padding: 20 * heightRef,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24 * fontRef,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  box: {
    height: 200 * heightRef,
    width: 300 * widthRef,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 5 * heightRef,
  },
  boxContainer: {
    flexDirection: "column",
  },
  textContainer: {
    flex: 0.5,
    width: 300 * widthRef,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2 * heightRef,
    borderBottomColor: "white",
  },
  text: {
    fontSize: 24 * fontRef,
    fontWeight: "bold",
  },
  searchContainer: {
    flex: 0.5,
    width: 300 * widthRef,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    fontSize: 16 * fontRef,
  },
  searchInput: {
    backgroundColor: "white",
    height: 40 * heightRef,
    width: 150 * widthRef,
  },
  searchButton: {
    backgroundColor: "red",
    height: 40 * heightRef,
  },
  searchButtonText: {
    color: "white",
    padding: 10 * heightRef,
  },
});
export default AddScreen;
