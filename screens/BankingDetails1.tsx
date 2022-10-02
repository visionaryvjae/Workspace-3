import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BankingDetails1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bankingDetailsView}>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("GetPaid")}
      >
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.bankingDetailsText}>Banking details</Text>
      <View style={styles.titleView}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.cardNumberText}>Card number</Text>
      </View>
      <View style={styles.companyView}>
        <View style={styles.rectangleView3} />
        <View style={styles.rectangleView4} />
        <Text style={styles.cardholderNumberText}>Cardholder number</Text>
      </View>
      <View style={styles.startDateView}>
        <View style={styles.rectangleView5} />
        <View style={styles.rectangleView6} />
        <Text style={styles.expiryDateText}>Expiry date</Text>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons25.png")}
        />
      </View>
      <View style={styles.endDateView}>
        <View style={styles.rectangleView7} />
        <View style={styles.rectangleView8} />
        <Text style={styles.cVVText}>CVV</Text>
        <Image
          style={styles.fontAwesomeIcons1}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons26.png")}
        />
      </View>
      <Image
        style={styles.fontAwesomeIcons2}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons27.png")}
      />
      <View style={styles.groupView}>
        <Text style={styles.saveCardText}>Save card</Text>
        <View style={styles.rectangleView9} />
      </View>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("CardDetailsAdded")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.addCardText}>Add card</Text>
      </Pressable>
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
  bankingDetailsText: {
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
    width: 125,
    height: 25,
  },
  cardNumberText: {
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
    width: 177,
    height: 25,
  },
  cardholderNumberText: {
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
  rectangleView5: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 57,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 110,
    height: 25,
  },
  expiryDateText: {
    position: "absolute",
    top: 2,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 35,
    left: 151,
    width: 20,
    height: 18,
    overflow: "hidden",
  },
  startDateView: {
    position: "absolute",
    top: 393,
    right: 218,
    width: 186,
    height: 70,
  },
  rectangleView7: {
    position: "absolute",
    top: 12,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 186,
    height: 57,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 14,
    backgroundColor: "#fff",
    width: 51,
    height: 25,
  },
  cVVText: {
    position: "absolute",
    top: 2,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  fontAwesomeIcons1: {
    position: "absolute",
    top: 35,
    left: 156,
    width: 20,
    height: 18,
    overflow: "hidden",
  },
  endDateView: {
    position: "absolute",
    top: 393,
    right: 25,
    width: 186,
    height: 69,
  },
  fontAwesomeIcons2: {
    position: "absolute",
    top: 252,
    left: 373,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  saveCardText: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
  },
  rectangleView9: {
    position: "absolute",
    top: 2,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderWidth: 1,
    width: 21,
    height: 19,
  },
  groupView: {
    position: "absolute",
    top: 485,
    left: 24,
    width: 114,
    height: 22,
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
  addCardText: {
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
  bankingDetailsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default BankingDetails1;
