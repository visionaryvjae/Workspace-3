import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BusLoginForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.busLoginForm}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("BusSignUp")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.registerText}>Register</Text>
      </Pressable>
      <View style={styles.rectangleView1} />
      <Text style={styles.logInText}>Log In</Text>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("EmployPeople")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.logInText1}>Log In</Text>
      </Pressable>
      <Pressable
        style={styles.forgotPassswordPressable}
        onPress={() => navigation.navigate("PasswordResetForm")}
      >
        <Text style={styles.forgotPassswordText}>Forgot Passsword?</Text>
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("IndLandingPage")}
      />
      <Text style={styles.text}>{`<`}</Text>
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <Text style={styles.emailAddressText}>{`Email Address `}</Text>
      <View style={styles.rectangleView4} />
      <View style={styles.rectangleView5} />
      <Text style={styles.passwordText}>Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 195,
    height: 54,
  },
  registerText: {
    position: "absolute",
    top: 12,
    left: 50,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    width: 96.98,
  },
  groupPressable: {
    position: "absolute",
    top: 107,
    left: 15,
    width: 195,
    height: 54,
  },
  rectangleView1: {
    position: "absolute",
    top: 107,
    left: 215,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    width: 195,
    height: 56,
  },
  logInText: {
    position: "absolute",
    top: 119,
    left: 277,
    fontSize: 24,
    fontFamily: "Inter",
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
  logInText1: {
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
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  forgotPassswordText: {
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 179,
    height: 22,
  },
  forgotPassswordPressable: {
    position: "absolute",
    left: 220,
    top: 441,
  },
  rectanglePressable: {
    position: "absolute",
    top: 57,
    left: 14,
    borderRadius: 6,
    backgroundColor: "rgba(186, 186, 186, 0.3)",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 388,
    bottom: 838,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  rectangleView2: {
    position: "absolute",
    top: 284,
    right: 23,
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
    top: 272,
    left: 42,
    backgroundColor: "#fff",
    width: 130,
    height: 25,
  },
  emailAddressText: {
    position: "absolute",
    top: 272,
    left: 47,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    top: 371,
    right: 23,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView5: {
    position: "absolute",
    top: 358,
    left: 42,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  passwordText: {
    position: "absolute",
    top: 360,
    left: 49,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  busLoginForm: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default BusLoginForm;
