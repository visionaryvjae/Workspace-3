import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordReset1 from "../components/PasswordReset1";

const PasswordResetForm1 = () => {
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
      <View style={styles.passwordResetForm}>
        <Pressable
          style={styles.backPressable}
          onPress={() => navigation.navigate("false")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.text}>{`<`}</Text>
        </Pressable>
        <View style={styles.groupView}>
          <View style={styles.rectangleView1} />
          <Text style={styles.emailAddressText}>{`Email Address `}</Text>
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
          <Text style={styles.pleaseEnterEmailAddressAss}>
            Please enter email address associated with account
          </Text>
        </View>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <PasswordReset1 onClose={closeSignUpContainer} />
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
    borderRadius: 6,
    backgroundColor: "rgba(186, 186, 186, 0.3)",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 16,
    bottom: 0,
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
  rectangleView1: {
    position: "absolute",
    top: 130,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  emailAddressText: {
    position: "absolute",
    top: 148,
    left: 16,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  forgotPasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: -93.5,
      },
      {
        translateX: -179.5,
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
    textAlign: "center",
  },
  pleaseEnterEmailAddressAss: {
    position: "absolute",
    top: 69,
    left: 10,
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: "300",
    fontFamily: "Merriweather",
    color: "#6d9773",
    textAlign: "left",
    width: 353,
    height: 49,
  },
  groupView: {
    position: "absolute",
    top: 144,
    right: 14,
    width: 379,
    height: 187,
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
    top: 808,
    left: 67,
    width: 273,
    height: 55,
  },
  passwordResetForm: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 927,
  },
});

export default PasswordResetForm1;
