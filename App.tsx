import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import Routes from "./src/routes/Router";
import { Pallet } from "./src/theme/theme";
import { NavigationContainer } from "@react-navigation/native";
import ProductsProvider from "./src/contexts/ProductsContext/ProductsContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

enableScreens();

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <ProductsProvider>
            <Routes />
          </ProductsProvider>
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Pallet.colors.Purple.Purple500,
  },
});

export default App;
