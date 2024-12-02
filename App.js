import React from "react"
import { NavigationContainer } from "@react-navigation/native" 
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

import Home from "./src/screens/Home"
import Profile from "./src/screens/Profile"
import Likes from "./src/screens/Likes"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="Likes" component={ Likes }/>
        <Stack.Screen name="Profile" component={ Profile }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}