import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalWeather from "./screens/GlobalWeather";
import HomeScreen from "./screens/HomeScreen";
import WeeklyScreen from "./screens/WeeklyScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Weather" component={WeeklyScreen} />
        <Stack.Screen name="Global" component={GlobalWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
