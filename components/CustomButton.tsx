import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  title,
  onPress,
  buttonCls,
  textCls,
}: {
  title: string;
  onPress: () => void;
  buttonCls: string;
  textCls: string;
}) {
  return (
    <TouchableOpacity onPress={onPress} className={buttonCls}>
      <Text className={textCls}>{title}</Text>
    </TouchableOpacity>
  );
}
