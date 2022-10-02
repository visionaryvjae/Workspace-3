import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Languages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.languagesView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("WorkExperience")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Skills")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <View style={styles.languageView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.text1}>^</Text>
        <View style={styles.rectangleView2} />
        <Text style={styles.languageText}>Language</Text>
      </View>
      <View style={styles.profiencyView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.text2}>^</Text>
        <View style={styles.rectangleView4} />
        <Text style={styles.proficiencyText}>Proficiency</Text>
      </View>
      <Text style={styles.languagesText}>Languages</Text>
      <View style={styles.addLanguageView}>
        <View style={styles.groupView}>
          <Text style={styles.addLangaugeText}>Add langauge</Text>
        </View>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons32.png")}
        />
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
    right: 23,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  text1: {
    position: "absolute",
    top: 54,
    left: 402,
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
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  languageText: {
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
    right: 2,
    width: 402,
    height: 70,
  },
  rectangleView3: {
    position: "absolute",
    top: 13,
    right: 23,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  text2: {
    position: "absolute",
    top: 56,
    left: 402,
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
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 115,
    height: 25,
  },
  proficiencyText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  profiencyView: {
    position: "absolute",
    top: 286,
    right: 2,
    width: 402,
    height: 70,
  },
  languagesText: {
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
  addLangaugeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 19,
    width: 121,
    height: 22,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  addLanguageView: {
    position: "absolute",
    top: 390,
    left: 39,
    width: 140,
    height: 22,
  },
  languagesView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default Languages;
