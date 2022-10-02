import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import ApplicantProfile from "../components/ApplicantProfile";

const ViewListing = () => {
  const [signUpContainerVisible, setSignUpContainerVisible] = useState(false);

  const openSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(true);
  }, []);

  const closeSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.viewListing}>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons.png")}
        />
        <Image
          style={styles.fontAwesomeIcons1}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons.png")}
        />
        <Image
          style={styles.appBarIcon}
          resizeMode="cover"
          source={require("../assets/app-bar.png")}
        />
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Text style={styles.text}>{`<`}</Text>
          <Text style={styles.text1}>{`<`}</Text>
        </View>
        <Text style={styles.applicantsText}>Applicants</Text>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text style={styles.nameSurnameText}>Name Surname</Text>
        <Text style={styles.titleText}>Title</Text>
        <Text style={styles.locationText}>Location</Text>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.viewText}>View</Text>
        </Pressable>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text style={styles.nameSurnameText1}>Name Surname</Text>
        <Text style={styles.titleText1}>Title</Text>
        <Text style={styles.locationText1}>Location</Text>
        <View style={styles.signUpView}>
          <View style={styles.searchBarView1} />
          <Text style={styles.viewText1}>View</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <ApplicantProfile onClose={closeSignUpContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  signUpContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  signUpContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  fontAwesomeIcons: {
    position: "absolute",
    height: "4.38%",
    width: "8.79%",
    top: "93.5%",
    right: "25.38%",
    bottom: "2.12%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fontAwesomeIcons1: {
    position: "absolute",
    height: "4.38%",
    width: "8.79%",
    top: "93.5%",
    right: "25.38%",
    bottom: "2.12%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  appBarIcon: {
    position: "absolute",
    height: "7.78%",
    width: "100%",
    top: "92.22%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
  },
  text: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "0%",
    right: "38.1%",
    bottom: "18.42%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "0%",
    right: "38.1%",
    bottom: "18.42%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    height: "4.1%",
    width: "9.81%",
    top: "6.16%",
    right: "86.92%",
    bottom: "89.74%",
    left: "3.27%",
  },
  applicantsText: {
    position: "absolute",
    top: 70,
    left: 138,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 132,
    left: 1,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 223,
  },
  ellipseIcon: {
    position: "absolute",
    top: 163,
    left: 25,
    width: 65,
    height: 65,
  },
  nameSurnameText: {
    position: "absolute",
    height: "3.24%",
    width: "43.93%",
    top: "17.6%",
    right: "32.24%",
    bottom: "79.16%",
    left: "23.83%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  titleText: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "20.84%",
    right: "42.76%",
    bottom: "77.54%",
    left: "24.3%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  locationText: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "23.11%",
    right: "42.76%",
    bottom: "75.27%",
    left: "24.3%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 213,
    height: 44,
  },
  viewText: {
    position: "absolute",
    top: 11,
    left: 26.22,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 158.93,
    height: 22,
  },
  signUpPressable: {
    position: "absolute",
    top: 293,
    left: 107,
    width: 213,
    height: 44,
  },
  rectangleView2: {
    position: "absolute",
    top: 355,
    left: 1,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 223,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 386,
    left: 25,
    width: 65,
    height: 65,
  },
  nameSurnameText1: {
    position: "absolute",
    height: "3.24%",
    width: "43.93%",
    top: "41.68%",
    right: "32.24%",
    bottom: "55.08%",
    left: "23.83%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  titleText1: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "44.92%",
    right: "42.76%",
    bottom: "53.46%",
    left: "24.3%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  locationText1: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "47.19%",
    right: "42.76%",
    bottom: "51.19%",
    left: "24.3%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  searchBarView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 213,
    height: 44,
  },
  viewText1: {
    position: "absolute",
    top: 11,
    left: 26.22,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 158.93,
    height: 22,
  },
  signUpView: {
    position: "absolute",
    top: 509,
    left: 107,
    width: 213,
    height: 44,
  },
  viewListing: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default ViewListing;
