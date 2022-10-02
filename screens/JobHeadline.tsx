import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JobHeadline = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.jobHeadline}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("CompanyProfile")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.jobTitleText}>Job title</Text>
      <View style={styles.rectangleView1} />
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Skills1")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <Text style={styles.aDescriptiveHeadline}>A descriptive headline</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  jobTitleText: {
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
  rectangleView1: {
    position: "absolute",
    top: 212,
    right: 29,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
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
  aDescriptiveHeadline: {
    position: "absolute",
    top: 174,
    left: 28,
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 353,
    height: 23,
  },
  jobHeadline: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default JobHeadline;
