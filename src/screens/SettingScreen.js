import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { heightRef, widthRef, fontRef } from "../utils/Dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
const data = [
  { id: 1, text: "School 1", icon: "school" },
  { id: 2, text: "School 2", icon: "school" },
  { id: 3, text: "School 3", icon: "school" },
];
const SettingScreen = ({ navigation }) => {
  return (
    <>
      {/* <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Location</Text>
        <TouchableOpacity>
          <FontAwesome name="plus" color="#000" size={20} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Calender")}>
                <View style={styles.itemContainer}>
                  <Text style={styles.text}>{item.text}</Text>
                  <FontAwesome5 name={item.icon} color="#fff" size={34} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
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
    height: "100%",
    width: "100%",
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
export default SettingScreen;
