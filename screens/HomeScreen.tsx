import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MessageScreen from "./MessageScreen";
import FeedScreen from "./FeedScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      console.log("Home Mount");
      return () => {
        console.log("Home Unmount");
      };
    }, [])
  );

  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
