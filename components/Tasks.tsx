import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    value: "1",
    checked: "checked",
  },
  {
    id: "bd71cbea-c1b1-46c2-aed5-3ad53abb28ba",
    value: "2",
    checked: "unchecked",
  },
  {
    id: "bd73cbea-c1b1-46c2-aed5-3ad53abb28ba",
    value: "3",
    checked: "unchecked",
  },
  {
    id: "bd73cbea-c1b1-4d6c2-aed5-3ad53abb28ba",
    value: "4",
    checked: "unchecked",
  },
  {
    id: "bd73cbea-c1b1-4das6c2-aed5-3ad53abb28ba",
    value: "5",
    checked: "unchecked",
  },
  ,
  {
    id: "bd73cbea-c1b1-46c2xx-aed5-3ad53abb28ba",
    value: "6",
    checked: "unchecked",
  },
  {
    id: "bd73cbea-c1b1-46c2-dasaed5-3ad53abb28ba",
    value: "7",
    checked: "unchecked",
  },
];

function Tasks() {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskHead}>
        <Text style={styles.title}>Recent Tasks</Text>
        <Text style={styles.viewAll}>See all</Text>
      </View>
      {/* <FlatList
        style={styles.tasks}
        data={DATA}
        renderItem={(item) => {
          return <View style={{flex: 1}}><Task value={Math.random().toString()} status={'unchecked'}></Task></View>;
        }}
        keyExtractor={(item) => Math.random().toString()}
      ></FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  taskHead: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  taskContainer: {
    marginTop: 20,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5577AF",
  },
  tasks: {
    marginTop: 20,
  },
});

export default Tasks;
