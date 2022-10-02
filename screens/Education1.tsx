import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Education1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.educationView}>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("JobTitle")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.educationText}>Education</Text>
      <Pressable
        style={styles.addHistoryPressable}
        onPress={() => navigation.navigate("AddEducation")}
      >
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("AddEducation")}
        />
        <View style={styles.groupView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.text1}>+</Text>
        </View>
        <Text style={styles.addEducationHistory}>Add Education History</Text>
      </Pressable>
      <View style={styles.groupView1}>
        <Text style={styles.noEducationHistory}>No education history</Text>
        <Pressable
          style={styles.rectanglePressable1}
          onPress={() => navigation.navigate("WorkHistory")}
        />
      </View>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("WorkHistory")}
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
  backPressable: {
    position: "absolute",
    top: 17,
    left: -10,
    width: 65,
    height: 78,
  },
  educationText: {
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
    top: 0,
    right: 42,
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
  groupView: {
    position: "absolute",
    top: 23,
    left: 65,
    width: 50,
    height: 50,
  },
  addEducationHistory: {
    position: "absolute",
    top: 34,
    left: 135,
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  addHistoryPressable: {
    position: "absolute",
    top: 196,
    right: -17,
    width: 421,
    height: 100,
  },
  noEducationHistory: {
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
  groupView1: {
    position: "absolute",
    top: 333,
    left: 34,
    width: 207,
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
  educationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default Education1;
