import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type EmployeeSearchType = {
  onClose?: () => void;
};

const EmployeeSearch = ({ onClose }: EmployeeSearchType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.employeeSearchView}>
      <Pressable
        style={styles.framePressable}
        onPress={() => navigation.navigate("EmployPeople")}
      >
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("EmployPeople")}
        >
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.xText}>X</Text>
        </Pressable>
      </Pressable>
      <View style={styles.homeBarView}>
        <View style={styles.homeIndicatorView} />
      </View>
      <View style={styles.jobFunctionView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.categoryText1}>
          <Text style={styles.categoryText}>Category</Text>
        </Text>
        <Text style={styles.text}>^</Text>
        <Text style={styles.informationTechnologyText}>
          Information Technology
        </Text>
      </View>
      <View style={styles.jobTitleView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.jobTitleText}>Job Title</Text>
        <Text style={styles.softwareEngineerText}>Software Engineer</Text>
        <Text style={styles.text1}>^</Text>
      </View>
      <View style={styles.locationView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.locationText1}>
          <Text style={styles.locationText}>Location</Text>
        </Text>
        <Text style={styles.pretoriaGautengText}>Pretoria, Gauteng</Text>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons60.png")}
        />
      </View>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("EmployPeople")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.applyText}>Apply</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff",
    width: 428,
    height: 800,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  xText: {
    position: "absolute",
    top: 13,
    left: 19,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  groupPressable: {
    position: "absolute",
    top: 23,
    left: 338,
    width: 50,
    height: 50,
  },
  framePressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  homeIndicatorView: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#50555c",
    width: 120,
    height: 5,
    flexShrink: 0,
    display: "none",
  },
  homeBarView: {
    position: "absolute",
    transform: [
      {
        translateX: -190,
      },
    ],
    bottom: 666,
    left: "50%",
    flexDirection: "column",
    paddingHorizontal: 120,
    paddingTop: 19,
    paddingBottom: 8,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView1: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  categoryText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  categoryText1: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 61,
    left: 361,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Iowan Old Style",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 33,
    height: 29,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  informationTechnologyText: {
    position: "absolute",
    top: 36,
    left: 21,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 261,
    height: 32,
  },
  jobFunctionView: {
    position: "absolute",
    top: 179,
    right: 25,
    width: 379,
    height: 80,
  },
  rectangleView2: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  jobTitleText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  softwareEngineerText: {
    position: "absolute",
    top: 36,
    left: 21,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 261,
    height: 32,
  },
  text1: {
    position: "absolute",
    top: 65,
    left: 361,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Iowan Old Style",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 33,
    height: 29,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  jobTitleView: {
    position: "absolute",
    top: 271,
    right: 25,
    width: 379,
    height: 80,
  },
  rectangleView3: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  locationText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  locationText1: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  pretoriaGautengText: {
    position: "absolute",
    top: 36,
    left: 21,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 261,
    height: 32,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 44,
    left: 343,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  locationView: {
    position: "absolute",
    top: 363,
    right: 25,
    width: 379,
    height: 80,
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
  applyText: {
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
    top: 710,
    left: 67,
    width: 273,
    height: 55,
  },
  employeeSearchView: {
    position: "relative",
    width: 428,
    height: 800,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default EmployeeSearch;
