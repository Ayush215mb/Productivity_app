import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const Authindex = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Auth Index</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/(tabs)/profile");
        }}
      >
        <Text>Go to tabs section</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authindex;
