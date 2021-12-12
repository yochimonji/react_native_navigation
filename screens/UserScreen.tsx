import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const UserScreen = ({ route }) => {
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
    </View>
  );
};

export default UserScreen;
