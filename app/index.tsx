import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-center font-bold text-red-900">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text className="text-2xl font-bold text-amber-500"> yoooooo</Text>
      <TouchableOpacity onPress={() => router.push("/(auth)")}>
        <Text>go to auth</Text>
      </TouchableOpacity>
    </View>
  );
}
