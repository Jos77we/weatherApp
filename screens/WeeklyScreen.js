import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const WeeklyScreen = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <>
      <LinearGradient
        colors={["rgba(13, 47, 87, 1)", "rgba(34, 74, 92, 1)"]}
        style={style.gradient}
      >
        <View className="pt-14 px-4 ">
          <View className="flex-row">
            <Text className="text-white text-4xl flex-1">Nairobi</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Global");
              }}
            >
              <FontAwesome5 name="globe-africa" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-2xl pt-2">7 Day Forecast</Text>
        </View>
        <View className="flex-row pt-14">
          <View className="px-12 space-y-5 ">
            <Text className=" text-white  text-lg">Sun</Text>
            <Text className=" text-white  text-lg">Mon</Text>
            <Text className=" text-white  text-lg">Tue</Text>
            <Text className=" text-white  text-lg">Wed</Text>
            <Text className=" text-white  text-lg">Thu</Text>
            <Text className=" text-white  text-lg">Fri</Text>
            <Text className=" text-white  text-lg">Sat</Text>
          </View>
          <View className="h-80 w-1 bg-white rounded"></View>
          <View className="space-y-2 pl-2">
            <Image source={require("./assets/cloudy5-removebg-preview.png")} />
            <Image
              source={require("./assets/cloudy_rainy-removebg-preview.png")}
            />
            <Image
              source={require("./assets/cloudynight-removebg-preview.png")}
            />
            <Image source={require("./assets/sunnybg-removebg-preview.png")} />
            <Image source={require("./assets/cloudy5-removebg-preview.png")} />
            <Image source={require("./assets/cloudy5-removebg-preview.png")} />
            <Image source={require("./assets/cloudy5-removebg-preview.png")} />
          </View>
          <View className="space-y-5 pl-20">
            <Text className=" text-white  text-lg">20</Text>
            <Text className=" text-white  text-lg">18</Text>
            <Text className=" text-white  text-lg">19</Text>
            <Text className=" text-white  text-lg">24</Text>
            <Text className=" text-white  text-lg">20</Text>
            <Text className=" text-white  text-lg">20</Text>
            <Text className=" text-white  text-lg">20</Text>
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={["rgba(9, 123, 134, 0.94)", "rgba(5, 59, 70, 0.88)"]}
        style={style.box}
      >
        <View className="flex-row pt-4 pl-4">
          <Text className="text-white text-4xl">Nakuru</Text>
          <View className="ml-52">
            <Entypo name="location" size={28} color="white" />
          </View>
        </View>
        <View className="flex-row">
          <View>
            <Text className="text-white text-base p-4 ">cloudy and sunny</Text>
            <View className="flex-row">
              <Text className="text-white text-6xl p-4">20</Text>
              <Text className="text-white text-xl pb-5">0</Text>
            </View>
          </View>
          <View className="pl-8">
            <Image
              source={require("./assets/sun_cloudy-removebg-preview.png")}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const style = StyleSheet.create({
  gradient: {
    height: 580,
  },
  box: {
    height: 250,
    borderRadius: 4,
  },
});
export default WeeklyScreen;
