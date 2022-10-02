import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type EHEditType = {
  onClose?: () => void;
};

const EHEdit = ({ onClose }: EHEditType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.eHEditView}>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Frame5")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.oKText}>OK</Text>
      </Pressable>
      <Text style={styles.skillsText}>Skills</Text>
      <View style={styles.titleView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.skillsText1}>Skills</Text>
      </View>
      <Pressable
        style={styles.signUpPressable1}
        onPress={() => navigation.navigate("Frame5")}
      >
        <View style={styles.searchBarView1} />
        <Text style={styles.addNewText}>Add new</Text>
      </Pressable>
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
  skillsText: {
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
  rectangleView: {
    position: "absolute",
    top: 14.43,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 68.57,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 57,
    height: 30,
  },
  skillsText1: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 90,
    height: 26.1,
  },
  titleView: {
    position: "absolute",
    top: 61,
    right: 20,
    width: 379,
    height: 83,
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
  eHEditView: {
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

export default EHEdit;
