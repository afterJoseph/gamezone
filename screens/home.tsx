import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Keyboard, Modal, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { globalStyles } from "../assets/styles/global";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currReviews) => {
      return [review, ...currReviews];
    });
    setModalOpen(false);
  };

  const removeReview = (key) => {
    setReviews((currReviews) => {
      return currReviews.filter((el) => el.key !== key);
    });
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <ReviewForm addReview={addReview} />
        </View>
        {/* </TouchableWithoutFeedback> */}
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      {reviews.length > 0 ? (
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ReviewDetails", { ...item, removeReview })
              }
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      ) : (
        <>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>👆</Text>
          <Text style={{ alignSelf: "center", fontSize: 20, marginTop: 10 }}>
            Hey, Add some reviews 😁
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f2f2f2",
    padding: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
