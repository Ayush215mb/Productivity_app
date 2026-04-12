import CustomButton from "@/components/CustomButton";
import { login_image } from "@/constants/image";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
const Authindex = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-800 text-white px-4 py-5 ">
      <Image
        source={login_image}
        style={{
          width: 200,
          height: 200,
          marginBlockEnd: 40,
          borderRadius: 20,
          objectFit: "contain",
          shadowColor: "black",
          shadowOpacity: 1,
        }}
      />

      <Text className="font-bold italic text-5xl text-white tracking-wider  text-center mb-10 ">
        The only Productive App you need
      </Text>

      <CustomButton
        title="Sign in with email"
        buttonCls="bg-blue-500 rounded-xl w-80 px-5 py-2 my-5"
        textCls="text-xl text-nowrap text-white font-bold text-center"
        onPress={() => router.push("/(tabs)")}
      />

      <View className="flex flex-row justify-between my-5 gap-10 ">
        <CustomButton
          title="Google"
          buttonCls="border-white border w-32 rounded-lg py-2 bg-black/10 "
          textCls=" text-white font-bold text-center text-lg"
          onPress={() => router.push("/(tabs)")}
        />

        <CustomButton
          title="Apple"
          buttonCls="border-white border w-32 rounded-lg py-2 bg-black/10 "
          textCls=" text-white font-bold text-center text-lg"
          onPress={() => router.push("/(tabs)")}
        />
      </View>
    </View>
  );
};

export default Authindex;
