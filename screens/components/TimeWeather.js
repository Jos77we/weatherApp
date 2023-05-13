import { View, Text } from 'react-native'
import React from 'react'



const TimeWeather = ({title, icon}) => {

  return (
    <View className="h-20 w-16 rounded-2xl bg-slate-700 items-center">
      <Text className="mt-3">{icon}</Text>
      <Text className="text-white mt-2">{title}</Text>
    </View>
  )
}

export default TimeWeather