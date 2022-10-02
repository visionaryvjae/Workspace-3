import * as React from "react";
import { useState, useCallback } from "react";
import { View, StyleSheet, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import QouteRequestApplied from "../components/QouteRequestApplied";

type QouteType = {
  onClose?: () => void;
};

const Qoute = ({ onClose }: QouteType) => {
  const navigation = useNavigation();
  const [signUpContainerVisible, setSignUpContainerVisible] = useState(false);

  const openSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(true);
  }, []);

  const closeSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.qouteView}>
        <Pressable
          style={styles.framePressable}
          onPress={() => navigation.navigate("EmployPeople")}
        >
          <View style={styles.groupView}>
            <View style={styles.rectangleView} />
          </View>
          <Pressable
            style={styles.groupPressable}
            onPress={() => navigation.navigate("EmployPeople")}
          >
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={styles.xText}>X</Text>
          </Pressable>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <View style={styles.jobFunctionView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.productServiceText}>Product/Service</Text>
        </View>
        <View style={styles.jobTitleView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.periodText}>Period</Text>
        </View>
        <View style={styles.descriptionView}>
          <View style={styles.rectangleView3} />
          <Text style={styles.descriptionText}>Description</Text>
        </View>
        <View style={styles.budgetView}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <Text style={styles.rText}>R</Text>
          <Text style={styles.rText1}>R</Text>
          <Text style={styles.budgetText}>Budget</Text>
        </View>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.applyText}>Apply</Text>
        </Pressable>
        <Text style={styles.rEQUIREMENTSText}>REQUIREMENTS</Text>
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <QouteRequestApplied onClose={closeSignUpContainer} />
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
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff",
    width: 428,
    height: 800,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  ellipseIcon: {
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
    color: "#0c3b2e",
    textAlign: "left",
  },
  groupPressable: {
    position: "absolute",
    top: 23,
    left: 338,
    width: 50,
    height: 50,
  },
  text: {
    position: "absolute",
    top: 494,
    left: 209,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    width: 9,
    height: 24,
  },
  framePressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  rectangleView1: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  productServiceText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  jobFunctionView: {
    position: "absolute",
    top: 179,
    right: 25,
    width: 379,
    height: 80,
  },
  rectangleView2: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  periodText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  jobTitleView: {
    position: "absolute",
    top: 271,
    right: 25,
    width: 379,
    height: 80,
  },
  rectangleView3: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  descriptionText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  descriptionView: {
    position: "absolute",
    top: 363,
    right: 25,
    width: 379,
    height: 80,
  },
  rectangleView4: {
    position: "absolute",
    top: 23,
    right: 214,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 165,
    height: 57,
  },
  rectangleView5: {
    position: "absolute",
    top: 23,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 165,
    height: 57,
  },
  rText: {
    position: "absolute",
    top: 39,
    left: 13,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 22,
    height: 26,
  },
  rText1: {
    position: "absolute",
    top: 39,
    left: 228,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 22,
    height: 26,
  },
  budgetText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  budgetView: {
    position: "absolute",
    top: 455,
    right: 25,
    width: 379,
    height: 80,
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
    top: 710,
    left: 67,
    width: 273,
    height: 55,
  },
  rEQUIREMENTSText: {
    position: "absolute",
    height: "5%",
    width: "46.03%",
    top: "14.5%",
    right: "48.36%",
    bottom: "80.5%",
    left: "5.61%",
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qouteView: {
    position: "relative",
    width: 428,
    height: 800,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Qoute;
