import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Skills = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.skillsView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Languages")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Bio")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <View style={styles.languageView}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.skillsText}>Skills*</Text>
      </View>
      <Text style={styles.skillsText1}>Skills</Text>
      <View style={styles.selectedSkillsView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.gardenerText}>Gardener</Text>
        <Text style={styles.xText}>x</Text>
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
    height: 57,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 70,
    height: 25,
  },
  skillsText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  languageView: {
    position: "absolute",
    top: 193,
    right: 25,
    width: 379,
    height: 70,
  },
  skillsText1: {
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
  rectangleView3: {
    position: "absolute",
    height: "79.03%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "20.97%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  gardenerText: {
    position: "absolute",
    height: "54.3%",
    width: "69.33%",
    top: "14.17%",
    right: "4%",
    bottom: "31.53%",
    left: "26.67%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  xText: {
    position: "absolute",
    top: 17.53,
    left: 19.49,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 23,
    height: 23,
  },
  selectedSkillsView: {
    position: "absolute",
    height: "4.57%",
    width: "35.05%",
    top: "31.32%",
    right: "58.41%",
    bottom: "64.11%",
    left: "6.54%",
  },
  skillsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default Skills;
