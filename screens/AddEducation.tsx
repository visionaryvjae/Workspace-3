import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const AddEducation = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addEducationView}>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("Education1")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.educationText}>Education</Text>
      <View style={styles.locationView}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.locationText}>Location*</Text>
      </View>
      <View style={styles.qualificationView}>
        <View style={styles.rectangleView3} />
        <View style={styles.rectangleView4} />
        <Text style={styles.qualificationText}>Qualification*</Text>
      </View>
      <View style={styles.instituitionView}>
        <View style={styles.rectangleView5} />
        <View style={styles.rectangleView6} />
        <Text style={styles.institutionText}>Institution*</Text>
      </View>
      <Pressable
        style={styles.addPressable}
        onPress={() => navigation.navigate("Education")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.addText}>Add</Text>
      </Pressable>
      <View style={styles.startView}>
        <View style={styles.rectangleView7} />
        <View style={styles.rectangleView8} />
        <Text style={styles.startDateText}>Start date*</Text>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons25.png")}
        />
      </View>
      <View style={styles.endView}>
        <View style={styles.rectangleView9} />
        <View style={styles.rectangleView10} />
        <Text style={styles.endDateText}>End date*</Text>
        <Image
          style={styles.fontAwesomeIcons1}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons25.png")}
        />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.currentlyEnrolledText}>Currently enrolled?</Text>
        <View style={styles.rectangleView11} />
      </Pressable>
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
  backPressable: {
    position: "absolute",
    top: 17,
    left: -10,
    width: 65,
    height: 78,
  },
  educationText: {
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
    width: 95,
    height: 25,
  },
  locationText: {
    position: "absolute",
    top: 0,
    left: 61,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  locationView: {
    position: "absolute",
    top: 270,
    right: 25,
    width: 379,
    height: 70,
  },
  rectangleView3: {
    position: "absolute",
    top: 12,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 120,
    height: 25,
  },
  qualificationText: {
    position: "absolute",
    top: 0,
    left: 59,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  qualificationView: {
    position: "absolute",
    top: 352,
    right: 25,
    width: 379,
    height: 69,
  },
  rectangleView5: {
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
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  institutionText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  instituitionView: {
    position: "absolute",
    top: 183,
    right: 25,
    width: 379,
    height: 70,
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
  addText: {
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
  addPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  rectangleView7: {
    position: "absolute",
    top: 13,
    right: 23,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 57,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 110,
    height: 25,
  },
  startDateText: {
    position: "absolute",
    top: 2,
    left: 61,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 35,
    left: 189,
    width: 20,
    height: 18,
    overflow: "hidden",
  },
  startView: {
    position: "absolute",
    top: 438,
    right: 195,
    width: 209,
    height: 70,
  },
  rectangleView9: {
    position: "absolute",
    top: 12,
    right: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 57,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 52,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  endDateText: {
    position: "absolute",
    top: 2,
    left: 59,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  fontAwesomeIcons1: {
    position: "absolute",
    top: 35,
    left: 191,
    width: 20,
    height: 18,
    overflow: "hidden",
  },
  endView: {
    position: "absolute",
    top: 438,
    right: 0,
    width: 211,
    height: 69,
  },
  currentlyEnrolledText: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
  },
  rectangleView11: {
    position: "absolute",
    top: 2,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderWidth: 1,
    width: 21,
    height: 19,
  },
  groupPressable: {
    position: "absolute",
    top: 537,
    left: 41,
    width: 191,
    height: 22,
  },
  addEducationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default AddEducation;
