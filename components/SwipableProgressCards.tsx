import { progressCards } from "@/constants/data";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Card from "./Card";
const SwipableProgressCards = () => {
  const [newData, setNewData] = useState([...progressCards]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const max = 4;
  return (
    <View className="flex-1 justify-center items-center ">
      {currentIndex === newData.length ? (
        <View>
          <Text className="text-white  text-3xl  italic font-extralight">
            You are all caught up
          </Text>
        </View>
      ) : (
        <View className="flex-1 justify-center items-center">
          {newData.map((item, index) => {
            if (index > currentIndex + max || index < currentIndex) {
              return null;
            }

            return (
              <Card
                key={index}
                item={item}
                index={index}
                datalength={newData.length}
                maxVisibleItem={max}
                currentindex={currentIndex}
                animatedValue={animatedValue}
                setCurrentIndex={setCurrentIndex}
                setNewData={setNewData}
                newData={newData}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SwipableProgressCards;
