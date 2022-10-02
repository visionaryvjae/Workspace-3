import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import PasswordReset from "../components/PasswordReset";
import { useNavigation } from "@react-navigation/native";

const PasswordResetForm = () => {
  const [signUpContainerVisible, setSignUpContainerVisible] = useState(false);
  const navigation = useNavigation();

  const openSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(true);
  }, []);

  const closeSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.passwordResetForm}>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("BusLoginForm")}
        />
        <Text style={styles.text}>{`<`}</Text>
        <View style={styles.rectangleView} />
        <Text style={styles.emailAddressText}>{`Email Address `}</Text>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
        <Text style={styles.pleaseEnterEmailAddressAss}>
          Please enter email address associated with account
        </Text>
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <PasswordReset onClose={closeSignUpContainer} />
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
    top: 807,
    left: 78,
    width: 273,
    height: 55,
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
  rectangleView: {
    position: "absolute",
    top: 295,
    right: 25,
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
    top: 313,
    left: 40,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  forgotPasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: -302,
      },
      {
        translateX: -180,
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
    top: 234,
    left: 34,
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: "300",
    fontFamily: "Merriweather",
    color: "#6d9773",
    textAlign: "left",
    width: 353,
    height: 49,
  },
  passwordResetForm: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default PasswordResetForm;
