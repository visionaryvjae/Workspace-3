import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Applied3Type = {
  onClose?: () => void;
};

const Applied3 = ({ onClose }: Applied3Type) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appliedView}>
      <Pressable
        style={styles.framePressable}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons24.png")}
          />
          <Text style={styles.appliedText}>Applied!</Text>
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("JobDescription")}
        >
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.xText}>X</Text>
        </Pressable>
      </Pressable>
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
  appliedText: {
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
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  xText: {
    position: "absolute",
    top: 13,
    left: 19,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  groupPressable: {
    position: "absolute",
    top: 23,
    left: 338,
    width: 50,
    height: 50,
  },
  framePressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  appliedView: {
    position: "relative",
    width: 428,
    height: 806,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Applied3;
