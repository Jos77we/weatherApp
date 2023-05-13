import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const GlobalWeather = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/london.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text className="text-white text-4xl pt-52 pl-3 font-semibold">
          LONDON
        </Text>
        <Text className="text-white text-xl pl-3 font-medium">
          Fri 23rdNov 8pm
        </Text>
        <View className="flex-row space-x-4 pl-4 pt-6">
          <Text className="pt-16 text-9xl text-white">15</Text>
          <View className="h-80 w-1 bg-stone-400 rounded pt-16"></View>
          <View className="pt-2 pl-14 space-y-8">
            <View className="items-center space-y-3">
              <Text className="text-white font-medium text-xl">Humidity</Text>
              <Text className="text-white text-light text-3xl ">20%</Text>
            </View>
            <View className="items-center space-y-3">
              <Text className="text-white font-medium text-xl">
                Precipitation
              </Text>
              <Text className="text-white text-light text-3xl ">300mm</Text>
            </View>
            <View className="items-center space-y-3">
              <Text className="text-white font-medium text-xl">Wind</Text>
              <Text className="text-white text-light text-3xl ">240nm</Text>
            </View>
          </View>
        </View>
        <View className="flex-row space-x-4 pl-4 pt-4">
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Mon</Text>
            <Feather name="sun" size={30} color="white" />
            <Text className="text-white text-xl">
              20
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Tue</Text>
            <Ionicons name="partly-sunny-outline" size={30} color="white" />
            <Text className="text-white text-xl">
              16
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Wed</Text>
            <Ionicons name="cloudy-outline" size={30} color="white" />
            <Text className="text-white text-xl">
              16
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Thu</Text>
            <Ionicons name="rainy-outline" size={30} color="white" />
            <Text className="text-white text-xl">
              18
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Fri</Text>
            <Feather name="cloud-snow" size={30} color="white" />
            <Text className="text-white text-xl">
              12
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Sat</Text>
            <Ionicons name="rainy-outline" size={30} color="white" />
            <Text className="text-white text-xl">
              18
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
          <View className="space-y-3 items-center">
            <Text className="text-white text-xl">Sun</Text>
            <Ionicons name="partly-sunny-outline" size={30} color="white" />
            <Text className="text-white text-xl">
              16
              <Text style={styles.text}>c</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GlobalWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 10,
  },
});
