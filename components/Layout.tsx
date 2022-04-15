import React from 'react';
import { StyleSheet, View as DefaultView } from "react-native";
import { View } from "./Themed";
type LayoutProps = DefaultView["props"] & {
  children?: any;
  style?: any;
};

function Layout(props: LayoutProps) {
  return (
    <View {...props} style={{ ...props.style, ...styles.screen }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
});

export default Layout;
