import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Applied2 from "../components/Applied2";

const Rate = () => {
  const navigation = useNavigation();
  const [signUpContainerVisible, setSignUpContainerVisible] = useState(false);

  const openSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(true);
  }, []);

  const closeSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.rateView}>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("Services")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.text}>{`<`}</Text>
        </Pressable>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
        <Text style={styles.whatIsYourRate}>What is your rate?</Text>
        <View style={styles.ratehrView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.hourlyRateText}>Hourly rate</Text>
          <Text style={styles.rText}>R</Text>
          <Text style={styles.hrText}>/hr</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <Applied2 onClose={closeSignUpContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  signUpContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  signUpContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 40,
    left: 23,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 54,
    bottom: 47,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  groupPressable: {
    position: "absolute",
    top: 17,
    left: -10,
    width: 65,
    height: 78,
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 273,
    height: 55,
  },
  nextText: {
    position: "absolute",
    top: 11.22,
    left: 16.3,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 240.4,
    height: 33.67,
  },
  signUpPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  whatIsYourRate: {
    position: "absolute",
    top: 129,
    left: 34,
    fontSize: 22,
    textDecoration: "underline",
    letterSpacing: 3.3,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#0c3b2e",
    textAlign: "left",
    width: 265,
    height: 52,
  },
  rectangleView1: {
    position: "absolute",
    top: 34,
    right: 28,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  hourlyRateText: {
    position: "absolute",
    top: 0,
    left: 40,
    fontSize: 22,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rText: {
    position: "absolute",
    top: 43,
    left: 61,
    fontSize: 30,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 40,
  },
  hrText: {
    position: "absolute",
    top: 48,
    left: 360,
    fontSize: 25,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "right",
    width: 47,
    height: 40,
  },
  ratehrView: {
    position: "absolute",
    top: 215,
    right: -3,
    width: 407,
    height: 91,
  },
  rateView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default Rate;
