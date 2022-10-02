import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Budget1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.budgetView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Skills1")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("JobDes")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <View style={styles.hourlyRateView}>
        <Text style={styles.hrText}>{`/hr -  `}</Text>
        <Text style={styles.hrText1}>/hr</Text>
        <View style={styles.rectangleView1} />
        <Text style={styles.hourlyRateText}>Hourly rate</Text>
        <Text style={styles.rText}>R</Text>
        <View style={styles.rectangleView2} />
        <Text style={styles.rText1}>R</Text>
      </View>
      <View style={styles.groupView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.hourlyRateText1}>Hourly rate</Text>
      </View>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Budget")}
      />
      <Text style={styles.monthlyRateText}>{`Monthly rate `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
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
  groupPressable: {
    position: "absolute",
    top: 57,
    left: 13,
    width: 42,
    height: 38,
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
  hrText: {
    position: "absolute",
    top: 42,
    left: 137,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 81,
    height: 27,
  },
  hrText1: {
    position: "absolute",
    top: 42,
    left: 323,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 81,
    height: 27,
  },
  rectangleView1: {
    position: "absolute",
    top: 26,
    right: 281,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 123,
    height: 57,
  },
  hourlyRateText: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rText: {
    position: "absolute",
    top: 43,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 34,
  },
  rectangleView2: {
    position: "absolute",
    top: 26,
    right: 90,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 123,
    height: 57,
  },
  rText1: {
    position: "absolute",
    top: 43,
    left: 206,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 34,
  },
  hourlyRateView: {
    position: "absolute",
    top: 212,
    left: 12,
    width: 404,
    height: 83,
  },
  rectangleView3: {
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
  hourlyRateText1: {
    position: "absolute",
    top: 12,
    left: 29,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    width: 137,
  },
  groupView: {
    position: "absolute",
    top: 108,
    left: 14,
    width: 195,
    height: 54,
  },
  rectanglePressable: {
    position: "absolute",
    top: 108,
    left: 214,
    backgroundColor: "#fff",
    width: 195,
    height: 54,
  },
  monthlyRateText: {
    position: "absolute",
    top: 120,
    left: 239,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  budgetView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Budget1;
