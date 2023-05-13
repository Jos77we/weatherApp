import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const CurrentWeather = () => {

    const navigation = useNavigation();
  return (
  <TouchableOpacity
   onPress={() =>{
    navigation.navigate('Weather')
   }}
   className="ml-52"
  >
    
    <AntDesign name="calendar" size={28} color="white" />
    
  </TouchableOpacity>
  );
};

export default CurrentWeather;
