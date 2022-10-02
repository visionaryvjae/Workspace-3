import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BusSignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.busSignUp}>
      <View style={styles.registerLoginView}>
        <View style={styles.rectangleView} />
        <Text style={styles.registerText}>Register</Text>
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("BusLoginForm")}
        />
        <Text style={styles.logInText}>Log In</Text>
      </View>
      <View style={styles.emailView}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.emailAddressText}>Email Address</Text>
      </View>
      <View style={styles.confirmView}>
        <View style={styles.rectangleView3} />
        <View style={styles.rectangleView4} />
        <Text style={styles.confirmPasswordText}>Confirm Password</Text>
      </View>
      <View style={styles.passwordView}>
        <View style={styles.rectangleView5} />
        <View style={styles.rectangleView6} />
        <Text style={styles.passwordText}>Password</Text>
      </View>
      <View style={styles.phoneView}>
        <View style={styles.rectangleView7} />
        <View style={styles.rectangleView8} />
        <Text style={styles.telephoneNumberText}>{`Telephone Number `}</Text>
      </View>
      <Pressable
        style={styles.registerButtonPressable}
        onPress={() => navigation.navigate("CompanyDetails")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.registerText1}>Register</Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("ClientLandingPage")}
      >
        <View style={styles.rectangleView9} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <View style={styles.nameView}>
        <View style={styles.rectangleView10} />
        <View style={styles.rectangleView11} />
        <Text style={styles.companyNameText}>Company Name*</Text>
      </View>
      <View style={styles.nationalityView}>
        <View style={styles.rectangleView12} />
        <View style={styles.rectangleView13} />
        <Text style={styles.websiteText}>Website</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
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
  registerText: {
    position: "absolute",
    top: 12,
    left: 50,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  rectanglePressable: {
    position: "absolute",
    top: 0,
    left: 200,
    backgroundColor: "#fff",
    width: 195,
    height: 54,
  },
  logInText: {
    position: "absolute",
    top: 12,
    left: 262,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  registerLoginView: {
    position: "absolute",
    top: 107,
    left: 15,
    width: 395,
    height: 54,
  },
  rectangleView1: {
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
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 130,
    height: 25,
  },
  emailAddressText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  emailView: {
    position: "absolute",
    top: 286,
    right: 24,
    width: 379,
    height: 69,
  },
  rectangleView3: {
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
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 170,
    height: 25,
  },
  confirmPasswordText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  confirmView: {
    position: "absolute",
    top: 536,
    right: 24,
    width: 379,
    height: 70,
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
    left: 16,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  passwordText: {
    position: "absolute",
    top: 2,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  passwordView: {
    position: "absolute",
    top: 449,
    right: 24,
    width: 379,
    height: 70,
  },
  rectangleView7: {
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
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 180,
    height: 25,
  },
  telephoneNumberText: {
    position: "absolute",
    top: 2,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  phoneView: {
    position: "absolute",
    top: 367,
    right: 24,
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
  registerText1: {
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
  registerButtonPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 16,
    bottom: 7,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  backPressable: {
    position: "absolute",
    top: 57,
    left: 14,
    width: 42,
    height: 38,
  },
  rectangleView10: {
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
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 160,
    height: 25,
  },
  companyNameText: {
    position: "absolute",
    top: 2,
    left: 25,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    top: 204,
    right: 24,
    width: 379,
    height: 70,
  },
  rectangleView12: {
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
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 90,
    height: 25,
  },
  websiteText: {
    position: "absolute",
    top: 1,
    left: 24,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  nationalityView: {
    position: "absolute",
    top: 623,
    right: 25,
    width: 379,
    height: 70,
  },
  busSignUp: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default BusSignUp;
