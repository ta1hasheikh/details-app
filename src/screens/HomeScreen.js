import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { fontRef, heightRef, widthRef } from "../utils/Dimensions";
import { useState } from "react";
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
      <List.Accordion
        title="Location"
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item
          title="Lahore"
          onPress={() => {
            setExpanded(false);
            setShow(!show);
          }}
        />
        <List.Item
          title="Karachi"
          onPress={() => {
            setExpanded(false);
            setShow(!show);
          }}
        />
        <List.Item
          title="Multan"
          onPress={() => {
            setExpanded(false);
            setShow(!show);
          }}
        />
      </List.Accordion>
      <View style={styles.container}>
        {show ? (
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Calender")}
                  >
                    <View style={styles.itemContainer}>
                      <Text style={styles.text}>{item.text}</Text>
                      <FontAwesome5 name={item.icon} color="#fff" size={34} />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    height: 100 * heightRef,
    width: 300 * widthRef,
    justifyContent: "space-between",
    backgroundColor: "red",
    alignItems: "center",
    padding: 20 * heightRef,
    marginVertical: 20 * heightRef,
    borderRadius: 5 * heightRef,
  },
  text: {
    color: "white",
    fontSize: 16 * fontRef,
    fontWeight: "bold",
  },
});
export default AddScreen;
