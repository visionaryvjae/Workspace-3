import * as React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

type EHEdit1Type = {
  onClose?: () => void;
};

const EHEdit1 = ({ onClose }: EHEdit1Type) => {
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
      <Text style={styles.educationHistoryText}>Education history</Text>
      <View style={styles.locationView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.qualificationText}>Qualification</Text>
      </View>
      <View style={styles.titleView}>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <Text style={styles.institutionText}>Institution</Text>
      </View>
      <View style={styles.companyView}>
        <View style={styles.rectangleView4} />
        <View style={styles.rectangleView5} />
        <Text style={styles.locationText}>Location</Text>
      </View>
      <View style={styles.startDateView}>
        <View style={styles.rectangleView6} />
        <View style={styles.rectangleView7} />
        <Text style={styles.startDateText}>Start date*</Text>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons52.png")}
        />
      </View>
      <View style={styles.endDateView}>
        <View style={styles.rectangleView8} />
        <View style={styles.rectangleView9} />
        <Text style={styles.endDateText}>End date*</Text>
        <Image
          style={styles.fontAwesomeIcons1}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons52.png")}
        />
      </View>
      <View style={styles.groupView}>
        <Text style={styles.currentlyEnrolledText}>Currently enrolled?</Text>
        <View style={styles.rectangleView10} />
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
  educationHistoryText: {
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
    top: 8.61,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 39.41,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 116,
    height: 17,
  },
  qualificationText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 111,
    height: 15,
  },
  locationView: {
    position: "absolute",
    top: 181,
    right: 20,
    width: 379,
    height: 48.02,
  },
  rectangleView2: {
    position: "absolute",
    top: 8.3,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 39.41,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 96,
    height: 17,
  },
  institutionText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 90,
    height: 15,
  },
  titleView: {
    position: "absolute",
    top: 61,
    right: 20,
    width: 379,
    height: 47.71,
  },
  rectangleView4: {
    position: "absolute",
    top: 9.45,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 39.41,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 87,
    height: 18,
  },
  locationText: {
    position: "absolute",
    top: 1.16,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 90,
    height: 15.21,
  },
  companyView: {
    position: "absolute",
    top: 120,
    right: 20,
    width: 379,
    height: 48.86,
  },
  rectangleView6: {
    position: "absolute",
    top: 8.99,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 39.41,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 110,
    height: 17.29,
  },
  startDateText: {
    position: "absolute",
    top: 1.38,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 95,
    height: 15.21,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 24.2,
    left: 151,
    width: 20,
    height: 12.45,
    overflow: "hidden",
  },
  startDateView: {
    position: "absolute",
    top: 243.54,
    right: 213,
    width: 186,
    height: 48.4,
  },
  rectangleView8: {
    position: "absolute",
    top: 8.3,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 39.41,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 14,
    backgroundColor: "#fff",
    width: 100,
    height: 17.29,
  },
  endDateText: {
    position: "absolute",
    top: 1.38,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 85,
    height: 15.21,
  },
  fontAwesomeIcons1: {
    position: "absolute",
    top: 24.2,
    left: 156,
    width: 20,
    height: 12.45,
    overflow: "hidden",
  },
  endDateView: {
    position: "absolute",
    top: 243.54,
    right: 20,
    width: 186,
    height: 47.71,
  },
  currentlyEnrolledText: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 176,
    height: 15.21,
  },
  rectangleView10: {
    position: "absolute",
    top: 1.01,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderWidth: 1,
    width: 21,
    height: 17,
  },
  groupView: {
    position: "absolute",
    top: 311.99,
    left: 38,
    width: 205,
    height: 18.01,
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

export default EHEdit1;
