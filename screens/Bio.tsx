import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Bio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bioView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Skills")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Services")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <View style={styles.languageView}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.biographyText}>Biography</Text>
        <Text style={styles.atLeast50Characters}>At least 50 characters</Text>
        <Text style={styles.describeYourTopExperiences}>
          Describe your top experiences and skills.
        </Text>
      </View>
      <Text style={styles.tellUsAboutYourself}>Tell us about yourself</Text>
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
    right: 38,
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
    left: 54,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  biographyText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  atLeast50Characters: {
    position: "absolute",
    top: 223,
    left: 261,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "right",
  },
  describeYourTopExperiences: {
    position: "absolute",
    top: 38,
    left: 61,
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(186, 186, 186, 0.4)",
    textAlign: "left",
  },
  languageView: {
    position: "absolute",
    top: 193,
    right: -13,
    width: 417,
    height: 241,
  },
  tellUsAboutYourself: {
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
  bioView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default Bio;
