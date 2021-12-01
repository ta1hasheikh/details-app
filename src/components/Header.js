import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
    height: "100%",
    width: "100%",
  },
  header: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },
});
