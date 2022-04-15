import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

function Project() {
  return (
    <View style={styles.projectContainer}>
      <View style={styles.logoContainer}>
        <Ionicons size={70} style={styles.logo} name="logo-angular"></Ionicons>
      </View>
      <Text style={styles.projectName}>Acomici</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    margin: "auto",
    borderRadius: 20,
    backgroundColor: "#EBF2FF",
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  logo: {
    padding: 10,
    color: '#205BCC'
  },
  projectName: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
  },
  projectContainer: {
    flex: 1,
    // flexDirection: 'row'
  }
});

export default Project;
