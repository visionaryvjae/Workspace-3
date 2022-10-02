import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.servicesView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Skills")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Rate")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <Text style={styles.whatServicesDoYouOffer}>
        <Text style={styles.whatServicesDo}>{`What services do you `}</Text>
        <Text style={styles.offerText}>offer?</Text>
      </Text>
      <View style={styles.languageView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.text1}>^</Text>
        <View style={styles.rectangleView2} />
        <Text style={styles.categoryText}>Category</Text>
      </View>
      <View style={styles.profiencyView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.text2}>^</Text>
        <View style={styles.rectangleView4} />
        <Text style={styles.serviceText}>Service</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 40,
    left: 23,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 54,
    bottom: 47,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  groupPressable: {
    position: "absolute",
    top: 17,
    left: -10,
    width: 65,
    height: 78,
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
  nextText: {
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
  whatServicesDo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  offerText: {
    margin: 0,
  },
  whatServicesDoYouOffer: {
    position: "absolute",
    top: 129,
    left: 34,
    fontSize: 22,
    textDecoration: "underline",
    letterSpacing: 3.3,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#0c3b2e",
    textAlign: "left",
    width: 265,
    height: 52,
  },
  rectangleView1: {
    position: "absolute",
    top: 13,
    right: 23,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  text1: {
    position: "absolute",
    top: 54,
    left: 402,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Iowan Old Style",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 33,
    height: 29,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  categoryText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  languageView: {
    position: "absolute",
    top: 215,
    right: 2,
    width: 402,
    height: 70,
  },
  rectangleView3: {
    position: "absolute",
    top: 13,
    right: 23,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  text2: {
    position: "absolute",
    top: 56,
    left: 402,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Iowan Old Style",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 33,
    height: 29,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 54,
    backgroundColor: "#fff",
    width: 80,
    height: 25,
  },
  serviceText: {
    position: "absolute",
    top: 1,
    left: 62,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  profiencyView: {
    position: "absolute",
    top: 308,
    right: 2,
    width: 402,
    height: 70,
  },
  servicesView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default Services;
