import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import Applied3 from "../components/Applied3";
import { useNavigation } from "@react-navigation/native";

const Apply = () => {
  const [applyTextVisible, setApplyTextVisible] = useState(false);
  const [signUpContainerVisible, setSignUpContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openApplyText = useCallback(() => {
    setApplyTextVisible(true);
  }, []);

  const closeApplyText = useCallback(() => {
    setApplyTextVisible(false);
  }, []);

  const openSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(true);
  }, []);

  const closeSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.applyView}>
        <View style={styles.statusBarView}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.rightIconsView}>
            <Text style={styles.lTEText}>LTE</Text>
            <View style={styles.batteryView}>
              <View style={styles.rectangleView} />
              <View style={styles.rectangleView1} />
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse.png")}
              />
            </View>
            <View style={styles.signalView}>
              <View style={styles.rectangleView2} />
              <View style={styles.rectangleView3} />
              <View style={styles.rectangleView4} />
              <View style={styles.rectangleView5} />
            </View>
          </View>
        </View>
        <View style={styles.rectangleView6} />
        <View style={styles.rectangleView7} />
        <View style={styles.rectangleView8} />
        <Text style={styles.coverLetterOptional}>Cover letter (optional)</Text>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Pressable style={styles.applyPressable} onPress={openApplyText}>
            <Text style={styles.applyText}>Apply</Text>
          </Pressable>
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("JobDescription")}
        >
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.xText}>X</Text>
        </Pressable>
        <View style={styles.rectangleView9} />
        <Text style={styles.text}>+</Text>
        <View style={styles.rectangleView10} />
        <Text style={styles.supportingDocumentsText}>Supporting Documents</Text>
        <View style={styles.rectangleView11} />
        <Text style={styles.text1}>+</Text>
        <Text style={styles.applyText1}>Apply</Text>
        <Text style={styles.yourRateR400hr}>
          <Text style={styles.yourRate}>{`Your rate: `}</Text>
          <Text style={styles.r400hrText}>R400/hr</Text>
        </Text>
        <Text style={styles.clientsBudgetR200R400h}>
          <Text style={styles.clientsBudgetText}>Client’s budget:</Text>
          <Text style={styles.r200R400hr}>R200 - R400/hr</Text>
        </Text>
        <Text style={styles.whatIsTheRateYoudLikeTo}>
          What is the rate you'd like to bid for this job?
        </Text>
        <View style={styles.rectangleView12} />
        <Text style={styles.rText}>R</Text>
        <Text style={styles.hourlyRateText}>Hourly rate</Text>
      </View>

      <Modal animationType="fade" transparent visible={applyTextVisible}>
        <View style={styles.applyTextOverlay}>
          <Pressable style={styles.applyTextBg} onPress={closeApplyText} />
          <Applied3 onClose={closeApplyText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <Applied3 onClose={closeSignUpContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  applyTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  applyTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
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
  timeText: {
    position: "relative",
    fontSize: 16,
    letterSpacing: -0.3,
    lineHeight: 20,
    fontFamily: "Abril Fatface",
    color: "#0f161e",
    textAlign: "center",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    width: 54,
  },
  lTEText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    top: "50%",
    right: 37.4,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Abhaya Libre",
    color: "#0f161e",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 18.13,
    height: 16,
  },
  rectangleView: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    top: "50%",
    right: 3.4,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#0f161e",
    borderWidth: 1,
    width: 24.93,
    height: 16,
    opacity: 0.32,
  },
  rectangleView1: {
    position: "absolute",
    transform: [
      {
        translateY: -5.33,
      },
    ],
    top: "50%",
    right: 5.67,
    borderRadius: 1,
    backgroundColor: "#0f161e",
    width: 20.4,
    height: 10.67,
  },
  ellipseIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -2.67,
      },
    ],
    top: "50%",
    right: 0,
    width: 2.27,
    height: 5.33,
    opacity: 0.32,
  },
  batteryView: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    top: "50%",
    right: 0,
    width: 28.33,
    height: 16,
  },
  rectangleView2: {
    position: "absolute",
    transform: [
      {
        translateY: 16.67,
      },
    ],
    top: "50%",
    right: -307,
    borderRadius: 1,
    backgroundColor: "#c4c4c4",
    width: 3.4,
    height: 5.33,
  },
  rectangleView3: {
    position: "absolute",
    transform: [
      {
        translateY: 14,
      },
    ],
    top: "50%",
    right: -312.67,
    borderRadius: 1,
    backgroundColor: "#c4c4c4",
    width: 3.4,
    height: 8,
  },
  rectangleView4: {
    position: "absolute",
    transform: [
      {
        translateY: 11.33,
      },
    ],
    top: "50%",
    right: -318.33,
    borderRadius: 1,
    backgroundColor: "#c4c4c4",
    width: 3.4,
    height: 10.67,
  },
  rectangleView5: {
    position: "absolute",
    transform: [
      {
        translateY: 8.67,
      },
    ],
    top: "50%",
    right: -324,
    borderRadius: 1,
    backgroundColor: "#c4c4c4",
    width: 3.4,
    height: 13.33,
  },
  signalView: {
    position: "relative",
    backgroundColor: "#0f161e",
    width: 20.4,
    height: 13.33,
  },
  rightIconsView: {
    position: "relative",
    width: 85,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  statusBarView: {
    position: "absolute",
    top: 0,
    right: -1,
    left: 0,
    height: 44,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangleView6: {
    position: "absolute",
    top: 44,
    left: 0,
    backgroundColor: "rgba(109, 151, 115, 0.63)",
    width: 428,
    height: 128,
  },
  rectangleView7: {
    position: "absolute",
    top: 126,
    left: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff",
    width: 428,
    height: 800,
  },
  rectangleView8: {
    position: "absolute",
    top: 638,
    right: 242,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 166,
    height: 134,
  },
  coverLetterOptional: {
    position: "absolute",
    top: 612,
    left: 20,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
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
  applyText: {
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 240.4,
    height: 33.67,
  },
  applyPressable: {
    position: "absolute",
    left: 16.3,
    top: 11.22,
  },
  signUpPressable: {
    position: "absolute",
    top: 834,
    left: 77,
    width: 273,
    height: 55,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  xText: {
    position: "absolute",
    top: 13,
    left: 19,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  groupPressable: {
    position: "absolute",
    top: 147,
    left: 327,
    width: 50,
    height: 50,
  },
  rectangleView9: {
    position: "absolute",
    top: 668,
    left: 66,
    borderRadius: 10,
    backgroundColor: "#e4e4e4",
    width: 73,
    height: 73,
  },
  text: {
    position: "absolute",
    top: 668,
    left: 69,
    fontSize: 50,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#cacaca",
    textAlign: "center",
    width: 68,
    height: 73,
  },
  rectangleView10: {
    position: "absolute",
    top: 638,
    right: 36,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 166,
    height: 134,
  },
  supportingDocumentsText: {
    position: "absolute",
    top: 612,
    left: 226,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleView11: {
    position: "absolute",
    top: 668,
    left: 272,
    borderRadius: 10,
    backgroundColor: "#e4e4e4",
    width: 73,
    height: 73,
  },
  text1: {
    position: "absolute",
    top: 668,
    left: 275,
    fontSize: 50,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#cacaca",
    textAlign: "center",
    width: 68,
    height: 73,
  },
  applyText1: {
    position: "absolute",
    top: 225,
    left: 20,
    fontSize: 30,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  yourRate: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  r400hrText: {
    margin: 0,
  },
  yourRateR400hr: {
    position: "absolute",
    top: 343,
    left: 56,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "center",
  },
  clientsBudgetText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  r200R400hr: {
    margin: 0,
  },
  clientsBudgetR200R400h: {
    position: "absolute",
    top: 342,
    left: 230,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "center",
    width: 133,
    height: 46,
  },
  whatIsTheRateYoudLikeTo: {
    position: "absolute",
    top: 275,
    left: 20,
    fontSize: 22,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 383,
  },
  rectangleView12: {
    position: "absolute",
    top: 453,
    right: 29,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rText: {
    position: "absolute",
    top: 462,
    left: 37,
    fontSize: 30,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 40,
  },
  hourlyRateText: {
    position: "absolute",
    top: 419,
    left: 22,
    fontSize: 22,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  applyView: {
    position: "relative",
    backgroundColor: "#f3f3f3",
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden",
  },
});

export default Apply;
