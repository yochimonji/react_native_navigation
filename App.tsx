import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({
            title: `ホーム画面`,
          })}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ title: "ユーザー画面" }}
        />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}
