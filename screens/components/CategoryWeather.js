import { View, Text } from "react-native";
import React from "react";

const CategoryWeather = ({ image, time }) => {
  return (
    <>
      <View className="h-32 w-44 rounded-md bg-slate-700">
        <View className="flex-row p-4 space-x-16">
          <View>{image}</View>
          <Text className="text-white">{time}</Text>
        </View>

        <View className="flex-row px-2">
        <Text className="text-white">Cloudy</Text>
        <Text className="text-white text-sm mx-12">winds</Text>
        </View>
        <View className="flex-row mt-2 px-2 space-x-8">
          <View>
            <Text className="text-2xl text-white">
              18
              <Text className="text-white">c</Text>
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-white text-3xl">
              330</Text>
              <Text className="text-white text-sm mt-3">Nm</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CategoryWeather;
