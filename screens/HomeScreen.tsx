import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  console.log();
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button
        title="ユーザー"
        onPress={() =>
          navigation.navigate("User", { userId: 1, userName: "モンジ" })
        }
      />
    </View>
  );
};

export default HomeScreen;
