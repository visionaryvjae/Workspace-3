import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workHistoryView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Education")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.workExperienceText}>Work Experience</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("AddExperience")}
      />
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("AddExperience")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.text1}>+</Text>
      </Pressable>
      <Pressable
        style={styles.addWorkHistory1}
        onPress={() => navigation.navigate("AddExperience")}
      >
        <Text style={styles.addWorkHistory}>Add Work History</Text>
      </Pressable>
      <View style={styles.groupView}>
        <Text style={styles.noWorkExperience}>No work experience</Text>
        <Pressable
          style={styles.rectanglePressable1}
          onPress={() => navigation.navigate("Languages")}
        />
      </View>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Languages")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  workExperienceText: {
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
  rectanglePressable: {
    position: "absolute",
    top: 196,
    right: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 100,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  text1: {
    position: "absolute",
    top: 7,
    left: 15,
    fontSize: 30,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  groupPressable1: {
    position: "absolute",
    top: 219,
    left: 51,
    width: 50,
    height: 50,
  },
  addWorkHistory: {
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  addWorkHistory1: {
    position: "absolute",
    left: 121,
    top: 230,
  },
  noWorkExperience: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
  },
  rectanglePressable1: {
    position: "absolute",
    top: 2,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderWidth: 1,
    width: 21,
    height: 19,
  },
  groupView: {
    position: "absolute",
    top: 333,
    left: 34,
    width: 199,
    height: 22,
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
  workHistoryView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default WorkHistory;
