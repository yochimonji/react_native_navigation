import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const UserScreen = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      console.log("User Mount");
      return () => {
        console.log("User Unmount");
      };
    }, [])
  );

  return (
    <View>
      <Text>ユーザー画面</Text>
      <Button
        title="メッセージ"
        onPress={() => navigation.navigate("Message")}
      ></Button>
    </View>
  );
};

export default UserScreen;
