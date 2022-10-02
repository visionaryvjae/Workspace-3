import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Applied2Type = {
  onClose?: () => void;
};

const Applied2 = ({ onClose }: Applied2Type) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appliedView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons24.png")}
          />
          <Text style={styles.niceWorkYouCanNowBrowse}>
            Nice work! You can now browse for jobs
          </Text>
        </View>
        <View style={styles.groupView1}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.xText}>X</Text>
        </View>
        <Pressable
          style={styles.signUpPressable}
          onPress={() => navigation.navigate("SearchTab")}
        >
          <View style={styles.searchBarView} />
          <Text style={styles.browseJobsText}>Browse jobs</Text>
        </Pressable>
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
    top: 341,
    left: 139,
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  niceWorkYouCanNowBrowse: {
    position: "absolute",
    top: 229,
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
  groupView1: {
    position: "absolute",
    top: 23,
    left: 338,
    width: 50,
    height: 50,
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
  browseJobsText: {
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
    top: 695,
    left: 77,
    width: 273,
    height: 55,
  },
  frameView: {
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

export default Applied2;
