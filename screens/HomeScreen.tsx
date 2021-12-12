import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

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
    <View>
      <Text>ホーム画面</Text>
      <Button
        title="ユーザー"
        onPress={() =>
          navigation.navigate("User", { userId: 1, userName: "yochimonji" })
        }
      />
    </View>
  );
};

export default HomeScreen;
