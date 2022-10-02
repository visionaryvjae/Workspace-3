import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ClientLandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.clientLandingPage}>
      <View style={styles.titleView}>
        <Text style={styles.pleaseEnterYourInviteCode}>Find talent!</Text>
      </View>
      <Pressable
        style={styles.registerPressable}
        onPress={() => navigation.navigate("BusSignUp")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate("BusLoginForm")}
      >
        <View style={styles.searchBarView1} />
        <Text style={styles.logInText}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.backButtonPressable}
        onPress={() => navigation.navigate("InitialLandingPage")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
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
    top: 297,
    left: 69,
    width: 290,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 273,
    height: 56,
  },
  signUpText: {
    position: "absolute",
    top: 11.43,
    left: 16.3,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 240.4,
    height: 34.29,
  },
  registerPressable: {
    position: "absolute",
    top: 554.7,
    left: 77,
    width: 273,
    height: 56,
  },
  searchBarView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 273,
    height: 55,
  },
  logInText: {
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
  loginPressable: {
    position: "absolute",
    top: 664.7,
    left: 77,
    width: 273,
    height: 55,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#0c3b2e",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 16,
    bottom: 7,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#6d9773",
    textAlign: "center",
  },
  backButtonPressable: {
    position: "absolute",
    top: 58,
    left: 35,
    width: 42,
    height: 38,
  },
  clientLandingPage: {
    position: "relative",
    backgroundColor: "#6d9773",
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default ClientLandingPage;
