import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const CardDetailsAdded = () => {
  return (
    <View style={styles.cardDetailsAdded1}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons24.png")}
          />
          <Text style={styles.cardDetailsAdded}>Card details added</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff",
    width: 428,
    height: 800,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 262,
    left: 139,
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  cardDetailsAdded: {
    position: "absolute",
    top: 423,
    left: 112,
    fontSize: 18,
    letterSpacing: 3.6,
    textTransform: "uppercase",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 204,
    height: 36,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  cardDetailsAdded1: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default CardDetailsAdded;
