import React from "react";
import { StyleSheet } from 'react-native';
import { RadioButton } from "react-native-paper";
import { Text, View } from "./Themed";

interface TaskProps {
    value: string;
    status: 'checked' | 'unchecked';
}


function Task(props: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <RadioButton value={props.value} status={props.status} />
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>Monster Website Landing Page</Text>
        <Text style={styles.taskDate}>Today</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        borderColor: '#f4f4f4',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 6
    },
    taskContent: {
        marginLeft: 20
    },
    taskTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500'
    },
    taskDate: {
        fontSize: 14,
        color: '#c25353',
    }
})

export default Task;
