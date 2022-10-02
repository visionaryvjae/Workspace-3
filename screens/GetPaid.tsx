import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetPaid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getPaidView}>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.pressable}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Profile1" })
        }
      >
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <View style={styles.rectangleView1} />
      <Text style={styles.currentBalanceR000}>
        <Text style={styles.currentBalance}>{`Current balance: `}</Text>
        <Text style={styles.r000Text}>R0,00</Text>
      </Text>
      <Text style={styles.cashOutText}>Cash out</Text>
      <Text style={styles.balanceText}>Balance</Text>
      <Text style={styles.paymentDetailsText}>Payment Details</Text>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("BankingDetails")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.cashOutText1}>Cash out</Text>
      </Pressable>
      <View style={styles.addHistoryView}>
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("BankingDetails1")}
        />
        <View style={styles.groupView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.text1}>+</Text>
        </View>
        <Text style={styles.addCardDetails}>Add card details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  pressable: {
    position: "absolute",
    right: 388,
    bottom: 838,
  },
  rectangleView1: {
    position: "absolute",
    top: 285,
    right: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 166,
  },
  currentBalance: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  r000Text: {
    margin: 0,
  },
  currentBalanceR000: {
    position: "absolute",
    top: 310,
    left: 47,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  cashOutText: {
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
  balanceText: {
    position: "absolute",
    top: 240,
    left: 35,
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: "300",
    fontFamily: "Merriweather",
    color: "#6d9773",
    textAlign: "left",
    width: 353,
    height: 32,
  },
  paymentDetailsText: {
    position: "absolute",
    top: 493,
    left: 35,
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: "300",
    fontFamily: "Merriweather",
    color: "#6d9773",
    textAlign: "left",
    width: 353,
    height: 32,
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 138,
    height: 55,
  },
  cashOutText1: {
    position: "absolute",
    top: 16,
    left: 9,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 120,
    height: 24,
  },
  signUpPressable: {
    position: "absolute",
    top: 383,
    left: 245,
    width: 138,
    height: 55,
  },
  rectanglePressable: {
    position: "absolute",
    top: 0,
    right: 4,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 100,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  text1: {
    position: "absolute",
    top: 7,
    left: 15,
    fontSize: 30,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 23,
    left: 27,
    width: 50,
    height: 50,
  },
  addCardDetails: {
    position: "absolute",
    top: 34,
    left: 97,
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  addHistoryView: {
    position: "absolute",
    top: 538,
    right: 23,
    width: 383,
    height: 100,
  },
  getPaidView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default GetPaid;
