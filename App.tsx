import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import FeedScreen from "./screens/FeedScreen";
import MessageScreen from "./screens/MessageScreen";
import SettingScreen from "./screens/SettingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "ユーザー",
          }}
        />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}
