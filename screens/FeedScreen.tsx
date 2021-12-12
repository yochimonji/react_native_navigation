import React from "react";
import { View, Text, Button } from "react-native";

const FeedScreen = ({ navigation }) => {
  return (
    <View>
      <Text>フィード画面</Text>
      <Button
        title="ユーザー"
        onPress={() => {
          navigation.navigate("User");
        }}
      ></Button>
    </View>
  );
};

export default FeedScreen;
