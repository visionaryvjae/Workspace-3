import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkExperience = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workExperienceView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("AddExperience")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.workExperienceText}>Work Experience</Text>
      <View style={styles.addWorkView}>
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("AddExperience")}
        />
        <View style={styles.groupView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.text1}>+</Text>
        </View>
        <Text style={styles.addWorkExperience}>Add Work Experience</Text>
      </View>
      <Pressable
        style={styles.nextPressable}
        onPress={() => navigation.navigate("Languages")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <View style={styles.workResultsView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.titleText}>Title</Text>
        <Text style={styles.datesText}>Dates</Text>
        <Text style={styles.locationText}>Location</Text>
        <Text style={styles.companyText}>Company</Text>
        <Text style={styles.deleteText}>Delete</Text>
        <Text style={styles.editText}>Edit</Text>
      </View>
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
    top: 0,
    right: 43,
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
    top: 24,
    left: 63,
    width: 50,
    height: 50,
  },
  addWorkExperience: {
    position: "absolute",
    top: 33,
    left: 136,
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  addWorkView: {
    position: "absolute",
    top: 542,
    right: -18,
    width: 422,
    height: 100,
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
  nextPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 7,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 301,
  },
  titleText: {
    position: "absolute",
    top: 17,
    left: 62,
    fontSize: 18,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  datesText: {
    position: "absolute",
    top: 197,
    left: 62,
    fontSize: 18,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  locationText: {
    position: "absolute",
    top: 137,
    left: 62,
    fontSize: 18,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  companyText: {
    position: "absolute",
    top: 77,
    left: 62,
    fontSize: 18,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  deleteText: {
    position: "absolute",
    top: 267,
    left: 321,
    fontSize: 15,
    textDecoration: "underline",
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#6d9773",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 19,
  },
  editText: {
    position: "absolute",
    top: 267,
    left: 256,
    fontSize: 15,
    textDecoration: "underline",
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#6d9773",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 19,
  },
  workResultsView: {
    position: "absolute",
    top: 196,
    right: 18,
    width: 386,
    height: 301,
  },
  workExperienceView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default WorkExperience;
