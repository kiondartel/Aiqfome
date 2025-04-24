import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  hiddenGestureScreenOptions,
  hiddenHeaderScreenOptions,
} from "../utils/constatns";
import ProductScreen from "../screens/ProductScreen/ProductScreen";

export type RootStackParamList = {
  ProductScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="ProductScreen"
      screenOptions={hiddenGestureScreenOptions}
    >
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={hiddenHeaderScreenOptions}
      />
    </Stack.Navigator>
  );
}
