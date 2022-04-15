import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Layout from "./components/Layout";
import Navigator from "./components/Navigator";
import { Pages } from "./constants/Pages";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [page, setPage] = useState(Pages.HOME);
  const [routes] = React.useState<any[]>([
    { key: Pages.HOME, title: "Home", icon: "queue-music" },
    {
      key: Pages.BOARD,
      title: "Board",
      icon: "view-agenda",
    },
  ]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Layout>
            
            <Navigator></Navigator>
          </Layout>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
