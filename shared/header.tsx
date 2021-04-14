import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#999",
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginLeft: 10,
  },
  icon: {
    position: "absolute",
    left: 16,
    paddingTop: 20,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
  },
});
