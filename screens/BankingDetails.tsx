import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Image } from "react-native";
import Applied1 from "../components/Applied1";

const BankingDetails = () => {
  const [signUpContainerVisible, setSignUpContainerVisible] = useState(false);

  const openSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(true);
  }, []);

  const closeSignUpContainer = useCallback(() => {
    setSignUpContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.bankingDetailsView}>
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
        <Text style={styles.withdrawText}>Withdraw</Text>
        <View style={styles.titleView}>
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Text style={styles.amountText}>Amount</Text>
          <Text style={styles.r000Text}>R0,00</Text>
        </View>
        <Pressable style={styles.signUpPressable} onPress={openSignUpContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.withdrawText1}>Withdraw</Text>
        </Pressable>
        <Image
          style={styles.x8JeOU1Bb02WYPza29CQ1Icon}
          resizeMode="cover"
          source={require("../assets/13x8jeou1bb02wypza29cq-1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={signUpContainerVisible}>
        <View style={styles.signUpContainerOverlay}>
          <Pressable
            style={styles.signUpContainerBg}
            onPress={closeSignUpContainer}
          />
          <Applied1 onClose={closeSignUpContainer} />
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
  withdrawText: {
    position: "absolute",
    transform: [
      {
        translateY: -307,
      },
      {
        translateX: -68,
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
    height: 155,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 78,
    height: 25,
  },
  amountText: {
    position: "absolute",
    top: 0,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  r000Text: {
    position: "absolute",
    top: 47,
    left: 33,
    fontSize: 70,
    fontWeight: "100",
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    top: 220,
    right: 25,
    width: 379,
    height: 167,
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 200,
    height: 55,
  },
  withdrawText1: {
    position: "absolute",
    top: 11,
    left: 18,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 166,
    height: 34,
  },
  signUpPressable: {
    position: "absolute",
    top: 435,
    left: 203,
    width: 200,
    height: 55,
  },
  x8JeOU1Bb02WYPza29CQ1Icon: {
    position: "absolute",
    top: 602,
    left: 0,
    width: 429,
    height: 359,
  },
  bankingDetailsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default BankingDetails;
