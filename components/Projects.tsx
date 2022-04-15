import React from "react";
import { StyleSheet } from "react-native";
import Project from "./Project";
import { Text, View } from "./Themed";

function Projects() {
  return (
    <View style={styles.projects}>
      <View style={styles.projectHead}>
        <Text style={styles.title}>Your Projects</Text>
        <Text style={styles.viewAll}>See all</Text>
      </View>
      <View style={styles.projectsContainer}>
        <View style={styles.project}>
          <Project></Project>
        </View>
        <View style={styles.project}>
          <Project></Project>
        </View>
        <View style={styles.project}>
          <Project></Project>
        </View>
        <View style={styles.project}>
          <Project></Project>
        </View>
        <View style={styles.project}>
          <Project></Project>
        </View>
        <View style={styles.project}>
          <Project></Project>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  projects: {
    flex: 1,
    marginTop: 30,
    width: "100%",
    flexDirection: 'column',
  },
  projectHead: {
    //   backgroundColor: 'black',
    flex: 1,
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5577AF",
  },
  projectsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    justifyContent: "space-between",
    marginTop: 10,
  },
  project: {
    width: "28%",
    marginVertical: 6,
  },
});

export default Projects;
