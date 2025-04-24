import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import Routes from "./src/routes/Router";
import { Pallet } from "./src/theme/theme";
import { NavigationContainer } from "@react-navigation/native";

enableScreens();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Pallet.colors.Purple.Purple500,
  },
});

export default App;
