import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, images } from "../assets/styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  console.log(route);

  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    alignSelf: "center",
    fontSize: 16,
    marginVertical: 15,
  },
  rating: {
    alignSelf: "center",
  },
});
