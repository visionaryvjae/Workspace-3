import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changePasswordView}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("IndividualSettings")}
      />
      <Text style={styles.text}>{`<`}</Text>
      <Text style={styles.changePasswordText}>Change password</Text>
      <View style={styles.titleView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.passwordText}>Password</Text>
      </View>
      <View style={styles.companyView}>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <Text style={styles.newPasswordText}>New password</Text>
      </View>
      <View style={styles.companyView1}>
        <View style={styles.rectangleView4} />
        <View style={styles.rectangleView5} />
        <Text style={styles.confirmNewPassword}>Confirm new password</Text>
      </View>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("IndividualSettings")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  changePasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: -303,
      },
      {
        translateX: -185,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 28,
    textDecoration: "underline",
    letterSpacing: 2.8,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#0c3b2e",
    textAlign: "left",
  },
  rectangleView: {
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
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 97,
    height: 25,
  },
  passwordText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    top: 220,
    right: 25,
    width: 379,
    height: 69,
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
    left: 16,
    backgroundColor: "#fff",
    width: 132,
    height: 25,
  },
  newPasswordText: {
    position: "absolute",
    top: 1,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  companyView: {
    position: "absolute",
    top: 306,
    right: 25,
    width: 379,
    height: 70,
  },
  rectangleView4: {
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
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 210,
    height: 25,
  },
  confirmNewPassword: {
    position: "absolute",
    top: 0,
    left: 22,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  companyView1: {
    position: "absolute",
    top: 393,
    right: 26,
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
  submitText: {
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
    top: 834,
    left: 77,
    width: 273,
    height: 55,
  },
  changePasswordView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default ChangePassword;
