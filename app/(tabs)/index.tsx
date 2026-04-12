import CustomButton from "@/components/CustomButton";
import SwipableProgressCards from "@/components/SwipableProgressCards";
import { profile_image } from "@/constants/image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1  bg-gray-800 px-4 py-5">
      {/** Header */}
      <View className="flex flex-row justify-between mb-16">
        <Text className="text-2xl text-white font-bold tracking-widest ">
          Home
        </Text>
        <View className="flex flex-row gap-3 justify-center">
          <MaterialIcons name="search" size={35} color={"white"} />
          <Image
            source={profile_image}
            style={{ height: 35, width: 35, borderRadius: 999 }}
          />
        </View>
      </View>

      <Text className="text-white font-extrabold text-5xl mb-3 tracking-widest  ">
        Hello,
      </Text>
      <Text className="text-white font-extrabold italic text-4xl tracking-widest text-nowrap">
        Erlich Bachman
      </Text>

      <View className=" flex flex-row gap-7 my-10 ">
        <CustomButton
          title="Overview"
          buttonCls="w-40 bg-blue-500 py-3 rounded-xl "
          textCls="text-white text-lg font-semibold tracking-wider text-center  "
          onPress={() => {}}
        />

        <CustomButton
          title="Productivity"
          buttonCls="w-40 bg-gray-400/20 py-3 rounded-xl "
          textCls="text-white text-lg font-semibold tracking-wider text-center  "
          onPress={() => {}}
        />
      </View>

      <Text className="text-white text-left text-2xl font-bold  ">
        Daily progress
      </Text>

      <SwipableProgressCards />
    </SafeAreaView>
  );
};

export default Home;
