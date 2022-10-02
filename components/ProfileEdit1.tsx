import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

type ProfileEdit1Type = {
  onClose?: () => void;
};

const ProfileEdit1 = ({ onClose }: ProfileEdit1Type) => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEditView}>
      <Text style={styles.myProfileText}>My profile</Text>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.oKText}>OK</Text>
      </Pressable>
      <View style={styles.profilePictureView}>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons48.png")}
        />
        <View style={styles.nextButtomView}>
          <View style={styles.searchBarView1} />
          <Text style={styles.uploadPhotoText}>Upload photo</Text>
        </View>
      </View>
      <View style={styles.locationView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.titleText}>Title</Text>
      </View>
      <View style={styles.titleView}>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <Text style={styles.nameText}>Name</Text>
      </View>
      <View style={styles.companyView}>
        <View style={styles.rectangleView4} />
        <View style={styles.rectangleView5} />
        <Text style={styles.surnameText}>Surname</Text>
      </View>
      <View style={styles.ratehrView}>
        <View style={styles.rectangleView6} />
        <Text style={styles.hourlyRateText}>Hourly rate</Text>
        <Text style={styles.rText}>R</Text>
        <Text style={styles.hrText}>/hr</Text>
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
  myProfileText: {
    position: "absolute",
    top: 21,
    left: 156,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 90,
    height: 23.47,
  },
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
    top: 450,
    left: 261,
    width: 126,
    height: 55,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 0,
    left: 15.97,
    width: 85.17,
    height: 90.39,
    overflow: "hidden",
  },
  searchBarView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#6d9773",
    width: 118,
    height: 29.19,
  },
  uploadPhotoText: {
    position: "absolute",
    top: 8.47,
    left: 8.87,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 100.26,
    height: 12.24,
  },
  nextButtomView: {
    position: "absolute",
    top: 99.81,
    left: 0,
    width: 118,
    height: 29.19,
  },
  profilePictureView: {
    position: "absolute",
    top: 69,
    left: 146,
    width: 118,
    height: 129,
  },
  rectangleView: {
    position: "absolute",
    top: 8.99,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 40,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 55,
    height: 17,
  },
  titleText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 83,
    height: 15.21,
  },
  locationView: {
    position: "absolute",
    top: 277,
    right: 27,
    width: 379,
    height: 48.99,
  },
  rectangleView2: {
    position: "absolute",
    top: 8,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 40,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 62,
    height: 17,
  },
  nameText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 65,
    height: 15,
  },
  titleView: {
    position: "absolute",
    top: 223,
    right: 220,
    width: 186,
    height: 48,
  },
  rectangleView4: {
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
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 87,
    height: 17,
  },
  surnameText: {
    position: "absolute",
    top: 0.69,
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
    top: 223,
    right: 27,
    width: 186,
    height: 48.4,
  },
  rectangleView6: {
    position: "absolute",
    top: 25,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 45,
  },
  hourlyRateText: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 116,
    height: 24.63,
  },
  rText: {
    position: "absolute",
    top: 36,
    left: 18,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 28,
    height: 24,
  },
  hrText: {
    position: "absolute",
    top: 36,
    left: 339,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "right",
    width: 30,
    height: 22,
  },
  ratehrView: {
    position: "absolute",
    top: 341,
    right: 24,
    width: 379,
    height: 70,
  },
  xText: {
    fontSize: 18,
    fontFamily: "Arial",
    color: "#000",
    textAlign: "left",
    width: 25,
    height: 23,
  },
  xPressable: {
    position: "absolute",
    left: 385,
    top: 18,
  },
  profileEditView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    borderWidth: 1,
    width: 420,
    height: 526,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default ProfileEdit1;
