import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Welcome from "../components/Welcome";

const JobDes = () => {
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
      <View style={styles.jobDesView}>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("Budget")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.text}>{`<`}</Text>
        </Pressable>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
        <View style={styles.languageView}>
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.atLeast50Characters}>At least 50 characters</Text>
          <Text
            style={styles.provideAClearAndDetailedJ}
          >{`Provide a clear and detailed job description. `}</Text>
        </View>
        <Text style={styles.descriptionText1}>Description</Text>
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <Welcome onClose={closeSignUpContainer} />
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
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 16,
    bottom: 7,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  groupPressable: {
    position: "absolute",
    top: 57,
    left: 13,
    width: 42,
    height: 38,
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
  submitText: {
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
  rectangleView1: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 200,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 108,
    height: 25,
  },
  descriptionText: {
    position: "absolute",
    top: 1,
    left: 24,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  atLeast50Characters: {
    position: "absolute",
    top: 223,
    left: 223,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "right",
  },
  provideAClearAndDetailedJ: {
    position: "absolute",
    top: 38,
    left: 23,
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(186, 186, 186, 0.4)",
    textAlign: "left",
  },
  languageView: {
    position: "absolute",
    top: 193,
    right: 25,
    width: 379,
    height: 241,
  },
  descriptionText1: {
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
  },
  jobDesView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default JobDes;
