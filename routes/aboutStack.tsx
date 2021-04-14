import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: { backgroundColor: "#eee" },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="About"
      component={About}
      options={({ navigation }) => {
        return {
          header: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
        };
      }}
    />
  </Navigator>
);

export default AboutStack;
