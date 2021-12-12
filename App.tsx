import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={() => ({
        //   StackBarActiveTintColor: "tomato",
        //   StackBarInactiveTintColor: "gray",
        // })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ホーム",
          }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "ユーザー",
          }}
        />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}
