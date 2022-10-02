import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const InitialLandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.initialLandingPage}>
      <View style={styles.titleView}>
        <Text style={styles.pleaseEnterYourInviteCode}>Welcome</Text>
      </View>
      <View style={styles.frameView}>
        <Image
          style={styles.undrawJobHuntReQ2031Icon}
          resizeMode="cover"
          source={require("../assets/undraw-job-hunt-re-q203-1.png")}
        />
      </View>
      <Pressable
        style={styles.getJobPressable}
        onPress={() => navigation.navigate("IndLandingPage")}
      >
        <Pressable
          style={styles.getAJob1}
          onPress={() => navigation.navigate("IndLandingPage")}
        >
          <Text style={styles.getAJob}>Get a job</Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={styles.employPressable}
        onPress={() => navigation.navigate("ClientLandingPage")}
      >
        <Text style={styles.employSomeoneText}>Employ someone</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pleaseEnterYourInviteCode: {
    flex: 1,
    position: "relative",
    fontSize: 55,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#f5f5f5",
    textAlign: "center",
  },
  titleView: {
    position: "absolute",
    top: 163,
    left: 77,
    width: 231,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  undrawJobHuntReQ2031Icon: {
    position: "relative",
    width: 215,
    height: 208.7,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    position: "absolute",
    top: 292,
    left: 85,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  getAJob: {
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
  },
  getAJob1: {
    position: "relative",
  },
  getJobPressable: {
    position: "absolute",
    top: 554.7,
    left: 125,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  employSomeoneText: {
    position: "relative",
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
  },
  employPressable: {
    position: "absolute",
    top: 657.7,
    left: 79.5,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  initialLandingPage: {
    position: "relative",
    backgroundColor: "#6d9773",
    flex: 1,
    width: "100%",
    height: 886,
  },
});

export default InitialLandingPage;
