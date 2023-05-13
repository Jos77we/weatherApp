import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DateWeather = ({day, weather, temperature}) => {
  return (
    <View className="h-32 w-24 rounded-xl ml-4" style={style.layout}>
      <Text className="text-white p-3">{day}</Text>
      <View className="items-center">{weather}</View>
      <Text className="text-white text-3xl p-2 px-6">{temperature}</Text>
     

    </View>
  )
}

const style = StyleSheet.create({
    layout: {
        backgroundColor: "rgba(14, 184, 221, 1)",

    }
})
export default DateWeather