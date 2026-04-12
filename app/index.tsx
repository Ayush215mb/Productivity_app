import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={() => router.push("/(auth)")}>
        <Text>go to auth</Text>
      </TouchableOpacity>
    </View>
  );
}
