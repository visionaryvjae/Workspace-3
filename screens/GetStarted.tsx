import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const GetStarted = () => {
  const navigation = useNavigation();
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState("");

  return (
    <View style={styles.getStartedView}>
      <View style={styles.zIPView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.postalCodeText}>Postal code*</Text>
      </View>
      <View style={styles.cityView}>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <Text style={styles.cityText}>City</Text>
      </View>
      <Text style={styles.welcomeUserReadyToWork}>
        <Text style={styles.welcomeUser}>{`Welcome, User. `}</Text>
        <Text style={styles.readyToWork}>Ready to work?</Text>
      </Text>
      <Pressable
        style={styles.nextButtomPressable}
        onPress={() => navigation.navigate("JobTitle")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.getStartedText}>Get started</Text>
      </Pressable>
      <Pressable
        style={styles.backButtonPressable}
        onPress={() => navigation.navigate("false")}
      >
        <View style={styles.rectangleView4} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <View style={styles.provinceView}>
        <View style={styles.rectangleView5} />
        <View style={styles.rectangleView6} />
        <Text style={styles.provinceText}>Province</Text>
      </View>
      <View style={styles.countryView}>
        <View style={styles.rectangleView7}>
          <DropDownPicker
            style={styles.dropDownPicker}
            open={rectangleDropdownOpen}
            setOpen={setRectangleDropdownOpen}
            value={rectangleDropdownValue}
            setValue={setRectangleDropdownValue}
            placeholder="Select country"
            dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
          />
        </View>
        <View style={styles.rectangleView8} />
        <Text style={styles.countryText}>Country*</Text>
      </View>
      <View style={styles.profilePictureView}>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons33.png")}
        />
        <View style={styles.nextButtomView}>
          <View style={styles.searchBarView1} />
          <Text style={styles.uploadPhotoText}>Upload photo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
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
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 120,
    height: 25,
  },
  postalCodeText: {
    position: "absolute",
    top: 0,
    left: 58,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  zIPView: {
    position: "absolute",
    top: 681,
    right: 22,
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
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 50,
    height: 25,
  },
  cityText: {
    position: "absolute",
    top: 2,
    left: 58,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  cityView: {
    position: "absolute",
    top: 594,
    right: 22,
    width: 379,
    height: 70,
  },
  welcomeUser: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  readyToWork: {
    margin: 0,
  },
  welcomeUserReadyToWork: {
    position: "absolute",
    transform: [
      {
        translateY: -326,
      },
      {
        translateX: -110,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 28,
    letterSpacing: 2.8,
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
  getStartedText: {
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
  rectangleView4: {
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
    width: 90,
    height: 25,
  },
  provinceText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  provinceView: {
    position: "absolute",
    top: 505,
    right: 26,
    width: 379,
    height: 70,
  },
  dropDownPicker: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
  },
  rectangleView7: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    borderStyle: "solid",
    width: 379,
    height: 57,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 90,
    height: 25,
  },
  countryText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  countryView: {
    position: "absolute",
    top: 423,
    right: 26,
    width: 379,
    height: 70,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 0,
    left: 18,
    width: 96,
    height: 96,
    overflow: "hidden",
  },
  searchBarView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#6d9773",
    width: 133,
    height: 31,
  },
  uploadPhotoText: {
    position: "absolute",
    top: 9,
    left: 10,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 113,
    height: 13,
  },
  nextButtomView: {
    position: "absolute",
    top: 106,
    left: 0,
    width: 133,
    height: 31,
  },
  profilePictureView: {
    position: "absolute",
    top: 256,
    left: 148,
    width: 133,
    height: 137,
  },
  getStartedView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default GetStarted;
