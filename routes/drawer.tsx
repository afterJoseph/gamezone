import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const { Navigator, Screen } = createDrawerNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={AboutStack} />
    </Navigator>
  </NavigationContainer>
);
