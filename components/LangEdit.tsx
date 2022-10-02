import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type LangEditType = {
  onClose?: () => void;
};

const LangEdit = ({ onClose }: LangEditType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.langEditView}>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Frame5")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.oKText}>OK</Text>
      </Pressable>
      <Text style={styles.languagesText}>Languages</Text>
      <Pressable
        style={styles.signUpPressable1}
        onPress={() => navigation.navigate("Frame5")}
      >
        <View style={styles.searchBarView1} />
        <Text style={styles.addNewText}>Add new</Text>
      </Pressable>
      <View style={styles.languageView}>
        <View style={styles.rectangleView} />
        <Text style={styles.text}>^</Text>
        <View style={styles.rectangleView1} />
        <Text style={styles.languageText}>Language</Text>
      </View>
      <View style={styles.profiencyView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.text1}>^</Text>
        <View style={styles.rectangleView3} />
        <Text style={styles.proficiencyText}>Proficiency</Text>
      </View>
      <Pressable
        style={styles.xPressable}
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Text style={styles.xText}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 126,
    height: 55,
  },
  oKText: {
    position: "absolute",
    top: 11.22,
    left: 7.52,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 110.96,
    height: 33.67,
  },
  signUpPressable: {
    position: "absolute",
    top: 452,
    left: 266,
    width: 126,
    height: 55,
  },
  languagesText: {
    position: "absolute",
    top: 29,
    left: 120,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    width: 181,
    height: 23,
  },
  searchBarView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 126,
    height: 55,
  },
  addNewText: {
    position: "absolute",
    top: 11.22,
    left: 7.52,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 110.96,
    height: 33.67,
  },
  signUpPressable1: {
    position: "absolute",
    top: 452,
    left: 22,
    width: 126,
    height: 55,
  },
  rectangleView: {
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
  text: {
    position: "absolute",
    top: 54,
    left: 364,
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
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  languageText: {
    position: "absolute",
    top: 1,
    left: 24,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  languageView: {
    position: "absolute",
    top: 86,
    right: 21,
    width: 379,
    height: 70,
  },
  rectangleView2: {
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
  text1: {
    position: "absolute",
    top: 56,
    left: 364,
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
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 115,
    height: 25,
  },
  proficiencyText: {
    position: "absolute",
    top: 1,
    left: 24,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  profiencyView: {
    position: "absolute",
    top: 179,
    right: 21,
    width: 379,
    height: 70,
  },
  xText: {
    fontSize: 18,
    fontFamily: "Arial",
    color: "#0c3b2e",
    textAlign: "left",
    width: 25,
    height: 23,
  },
  xPressable: {
    position: "absolute",
    left: 385,
    top: 18,
  },
  langEditView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    borderWidth: 1,
    width: 420,
    height: 526,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default LangEdit;
