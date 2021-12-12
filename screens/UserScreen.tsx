import React from "react";
import { View, Text } from "react-native";

const UserScreen = ({ route }) => {
  console.log(route);
  return (
    <View>
      <Text>ユーザー画面</Text>
    </View>
  );
};

export default UserScreen;
