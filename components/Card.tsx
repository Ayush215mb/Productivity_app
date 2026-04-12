import { ProgressCardType } from "@/constants/data";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { GlassContainer } from "./GlassCard";
type Props = {
  item: ProgressCardType;
  index: number;
  datalength: number;
  maxVisibleItem: number;
  currentindex: number;
  animatedValue: SharedValue<number>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setNewData: React.Dispatch<React.SetStateAction<ProgressCardType[]>>;
  newData: ProgressCardType[];
};

const Card = ({
  item,
  index,
  datalength,
  maxVisibleItem,
  currentindex,
  animatedValue,
  setCurrentIndex,
  setNewData,
  newData,
}: Props) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      const isSwiapedRight = e.translationX > 0;
      direction.value = isSwiapedRight ? 1 : -1;

      if (currentindex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1],
        );
      }
    })
    .onEnd((e) => {
      if (currentindex === index) {
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            scheduleOnRN(setCurrentIndex, currentindex + 1);
            // scheduleOnRN(setNewData, [...newData, newData[currentindex]]);
          });

          // animatedValue.value = withTiming(currentindex + 1);
        } else {
          translateX.value = withTiming(0, { duration: 500 });
          animatedValue.value = withTiming(currentindex);
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentindex;

    const roateteZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20],
    );

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-30, 0],
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1],
    );
    const opactiy = interpolate(
      animatedValue.value + maxVisibleItem,
      [index, index + 1],
      [0, 1],
    );
    return {
      transform: [
        { translateX: translateX.value },
        {
          scale: currentItem ? 1 : scale,
        },
        {
          translateY: currentItem ? 0 : translateY,
        },
        {
          rotateZ: currentItem ? `${direction.value * roateteZ}deg` : "0deg",
        },
      ],

      opacity: index < maxVisibleItem + currentindex ? 1 : opactiy,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          animatedStyle,
          {
            zIndex: datalength - index,

            backgroundColor: "transparent",
            borderRadius: 16,
            overflow: "hidden",
          },
        ]}
        className={` absolute w-[360px] h-[200px] `}
      >
        <GlassContainer
          tint="light"
          blur={40}
          contanierCls="justify-between py-10"
        >
          <View className="gap-4">
            <Text className="text-white text-3xl tracking-wider font-semibold ">
              {item.title}
            </Text>
            <Text className="text-white text-xl  font-semibold ">
              {item.subtitle}
            </Text>
          </View>
          <View className="flex gap-5">
            <Text className="text-white text-xl font-semibold ">
              {item.progress} %
            </Text>
            <View
              style={{ width: `${item.progress}%` }}
              className={` h-1 rouded-full bg-blue-500`}
            />
          </View>
        </GlassContainer>
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;
