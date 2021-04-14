import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import ReviewHeader from "../shared/reviewHeader";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: { backgroundColor: "#eee" },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="GameZone"
      component={Home}
      options={({ navigation }) => {
        return {
          header: () => <Header navigation={navigation} title="GameZone" />,
        };
      }}
    />
    <Screen
      name="ReviewDetails"
      component={ReviewDetails}
      options={({ navigation, route }) => {
        return {
          header: () => (
            <ReviewHeader
              navigation={navigation}
              title="Review Details"
              id={route.params.key}
              removeReview={route.params.removeReview}
            />
          ),
        };
      }}
    />
    {/* <Screen name="ReviewDetails" component={ReviewDetails} /> */}
  </Navigator>
);

export default HomeStack;
