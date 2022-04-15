import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import BoardScreen from '../screens/BoardScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaskScreen from '../screens/TaskScreen';
function Navigator() {
  const Tab = createBottomTabNavigator<any>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Board") {
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "Tasks") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1437AA",
        tabBarInactiveTintColor: "#A19FA9",
        headerShown: false
      })}
    >
      <Tab.Screen options={{}} name="Home" component={HomeScreen} />

      <Tab.Screen options={{}} name="Board" component={BoardScreen} />

      <Tab.Screen options={{}} name="Tasks" component={TaskScreen} />

      <Tab.Screen options={{}} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigator: {
    // paddingTop: 10
  },
});

export default Navigator;
