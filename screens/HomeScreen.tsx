import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Tasks from "../components/Tasks";
import { View } from "../components/Themed";

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Profile />
      <ScrollView style={styles.projectContainer}>
        <Projects />
        <Tasks />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    fontFamily: "Roboto",
  },
  projectContainer: {
    flex: 1,
    height: '100%'
  },
});

export default HomeScreen;
