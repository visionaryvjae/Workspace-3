import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Budget = () => {
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
        <View style={styles.rectangleView1} />
        <Text style={styles.rText}>R</Text>
      </View>
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("Budget1")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.hourlyRateText}>Hourly rate</Text>
      </Pressable>
      <View style={styles.rectangleView3} />
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
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 391,
    height: 57,
  },
  rText: {
    position: "absolute",
    top: 17,
    left: 21,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    width: 47,
    height: 34,
  },
  hourlyRateView: {
    position: "absolute",
    top: 238,
    right: 25,
    width: 391,
    height: 57,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 195,
    height: 54,
  },
  hourlyRateText: {
    position: "absolute",
    top: 12,
    left: 29,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    width: 137,
  },
  groupPressable1: {
    position: "absolute",
    top: 108,
    left: 14,
    width: 195,
    height: 54,
  },
  rectangleView3: {
    position: "absolute",
    top: 108,
    left: 214,
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

export default Budget;
