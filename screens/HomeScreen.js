import { View, Text, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import CategoryWeather from "./components/CategoryWeather";
import TimeWeather from "./components/TimeWeather";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DateWeather from "./components/DateWeather";
import CurrentWeather from "./components/CurrentWeather";
const HomeScreen = () => {
  const nav = useNavigation();


  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <>
      <LinearGradient
        colors={["rgba(26, 116, 155, 0.8)", "#0F203A"]}
        style={style.gradient}
      >
        <>
          <View className="pt-14">
            <View className="flex-row">
            <Text className="text-4xl text-white">Nairobi</Text>
            <CurrentWeather/>
            </View>
            <View>
            <Text className="text-yellow-500 text-xs">Kenya</Text>
            <Text className="text-white text-2xl mt-3">Fri 2pm</Text>
            </View>
          </View>
          <View className="flex-row">
            <View className="flex-row">
            <Text style={style.text}>20</Text>
            <Text className="text-xs text-white mt-10 ">0</Text>
            </View>
            <View>
            <Text className="text-white text-5xl mt-20">c</Text>
            </View>
            <View className="ml-16">
              <Image source={require("./assets/sunny2-removebg-preview.png")} />
            </View>
          </View>
          <View className="flex-row px-2 space-x-4">
            <View>
              <CategoryWeather
                image={
                  <Image
                    source={require("./components/images/cloudy4-removebg-preview.png")}
                  />
                }
                time="2pm"
              />
            </View>
            <View>
              <CategoryWeather
                image={
                  <Image
                    source={require("./components/images/cloudy4-removebg-preview.png")}
                  />
                }
                time="2pm"
              />
            </View>
          </View>
          <View className="p-6 flex-row space-x-6 mx-10">
            <View>
              <TimeWeather
                icon={<Feather name="wind" size={32} color="white" />}
                title="280N"
              />
              <Text className="text-white p-2">Winds</Text>
            </View>
            <View>
              <TimeWeather
                icon={<Ionicons name="water-outline" size={24} color="white" />}
                title="24%"
              />
              <Text className="text-white p-2">Humidity</Text>
            </View>
            <View>
              <TimeWeather
                icon={<Feather name="sun" size={24} color="white" />}
                title="4.0cd"
              />
              <Text className="text-white p-2">intesity</Text>
            </View>
          </View>
        </>
      </LinearGradient>
      <View style={style.box} className="p-2 flex-row space-x-0 ">
        <View>
          <DateWeather 
          day="Saturday"
          weather={<Image source={require("./components/images/cloudy4-removebg-preview.png")}/>}
          temperature="18"
          />
        </View>
        <View>
          <DateWeather 
            day="Sunday"
             weather={<Image source={require("./components/images/cloudy5-removebg-preview.png")}/>}
             temperature="22"
             />
        </View>
        <View>
          <DateWeather 
            day="Monday"
            weather={<Image source={require("./components/images/group6.png")}/>}
            temperature="20"/>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  gradient: {
    height: 640,
  },
  box: {
    height: 200,
    backgroundColor: "#001D2E",
  },
  text: {
    color: 'white',
    fontSize: 90,
    marginLeft: 16,
    marginTop: 30,
  }
});

export default HomeScreen;
