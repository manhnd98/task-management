import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./Themed";

function Profile() {
  return (
    <View style={styles.profile}>
      <View>
        <Text style={styles.morning}>Good morning,</Text>
        <Text style={styles.name}>Nguyen Manh</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  morning: {
    marginTop: 20,
    fontSize: 16,
    color: "#444446",
  },
  name: {
    fontSize: 20,
    lineHeight: 24,
    color: "#31364A",
    fontWeight: "600",
  },

  logo: {
    marginVertical: 10,
    width: 50,
    height: 50,
  },
  logoContainer: {
    //   flex: 1,
    //   flexDirection: 'row',
    //   justifyContent: 'flex-end',
    //    alignItems: 'center',
  },
});

export default Profile;
