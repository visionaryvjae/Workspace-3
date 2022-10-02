import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JobTitle = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.jobTitleView}>
      <Text style={styles.whatDoYouDo}>{`What do you do? `}</Text>
      <Pressable
        style={styles.nextButtomPressable}
        onPress={() => navigation.navigate("Education1")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <Pressable
        style={styles.backButtonPressable}
        onPress={() => navigation.navigate("GetStarted")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.makeAStatementByDescribing}>
        Make a statement by describing your expertise in your own words.
      </Text>
      <View style={styles.genderGroupView} />
    </View>
  );
};

const styles = StyleSheet.create({
  whatDoYouDo: {
    position: "absolute",
    transform: [
      {
        translateY: -304,
      },
      {
        translateX: -117,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 28,
    letterSpacing: 2.8,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#0c3b2e",
    textAlign: "center",
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
  nextButtomPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
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
  backButtonPressable: {
    position: "absolute",
    top: 17,
    left: -9,
    width: 65,
    height: 78,
  },
  makeAStatementByDescribing: {
    position: "absolute",
    top: 211,
    left: 38,
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "300",
    fontFamily: "Merriweather",
    color: "#6d9773",
    textAlign: "center",
    width: 353,
    height: 71,
  },
  genderGroupView: {
    position: "absolute",
    top: 337,
    right: 24,
    width: 379,
    height: 70,
  },
  jobTitleView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default JobTitle;
