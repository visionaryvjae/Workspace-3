import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type AppliedType = {
  onClose?: () => void;
};

const Applied = ({ onClose }: AppliedType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appliedView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("SearchEntry")}
        >
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.xText}>X</Text>
        </Pressable>
        <View style={styles.jobFunctionView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.categoryText}>Category</Text>
          <Text style={styles.text}>^</Text>
          <Text style={styles.informationTechnologyText}>
            Information Technology
          </Text>
        </View>
        <View style={styles.jobTitleView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.experienceLevelText}>Experience level</Text>
          <Text style={styles.entryLevelText}>{`Entry level `}</Text>
          <Text style={styles.text1}>^</Text>
        </View>
        <View style={styles.jobTTypeView}>
          <View style={styles.rectangleView3} />
          <Text style={styles.jobTypeText}>Job Type</Text>
          <Text style={styles.fullTimeText}>Full-time</Text>
          <Text style={styles.text2}>^</Text>
        </View>
        <View style={styles.locationView}>
          <View style={styles.rectangleView4} />
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.pretoriaGautengText}>Pretoria, Gauteng</Text>
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons34.png")}
          />
        </View>
        <Pressable
          style={styles.signUpPressable}
          onPress={() => navigation.navigate("SearchResults")}
        >
          <View style={styles.searchBarView} />
          <Text style={styles.applyText}>Apply</Text>
        </Pressable>
      </View>
      <View style={styles.hourlyRateView}>
        <Text style={styles.hrText}>{`/hr -  `}</Text>
        <Text style={styles.hrText1}>/hr</Text>
        <View style={styles.rectangleView5} />
        <Text style={styles.hourlyRateText}>Hourly rate</Text>
        <Text style={styles.rText}>R</Text>
        <View style={styles.rectangleView6} />
        <Text style={styles.rText1}>R</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopRightRadius: 70,
    backgroundColor: "#fff",
    width: 428,
    height: 926,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 926,
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
    top: 107,
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
  experienceLevelText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  entryLevelText: {
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
    top: 199,
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
  jobTypeText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  fullTimeText: {
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
  text2: {
    position: "absolute",
    top: 65,
    left: 359,
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
  jobTTypeView: {
    position: "absolute",
    top: 291,
    right: 25,
    width: 379,
    height: 80,
  },
  rectangleView4: {
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
    top: 383,
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
    top: 826,
    left: 77,
    width: 273,
    height: 55,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 926,
  },
  hrText: {
    position: "absolute",
    top: 42,
    left: 137,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 81,
    height: 27,
  },
  hrText1: {
    position: "absolute",
    top: 42,
    left: 323,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 81,
    height: 27,
  },
  rectangleView5: {
    position: "absolute",
    top: 26,
    right: 281,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 123,
    height: 57,
  },
  hourlyRateText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rText: {
    position: "absolute",
    top: 43,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 34,
  },
  rectangleView6: {
    position: "absolute",
    top: 26,
    right: 90,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 123,
    height: 57,
  },
  rText1: {
    position: "absolute",
    top: 43,
    left: 206,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 34,
  },
  hourlyRateView: {
    position: "absolute",
    top: 476,
    left: 24,
    width: 404,
    height: 83,
  },
  appliedView: {
    position: "relative",
    width: 428,
    height: 933,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Applied;
