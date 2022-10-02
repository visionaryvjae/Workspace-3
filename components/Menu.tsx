import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

type MenuType = {
  onClose?: () => void;
};

const Menu = ({ onClose }: MenuType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuView}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("JobHeadline")}
      />
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("ClientSettings")}
      />
      <Pressable
        style={styles.rectanglePressable2}
        onPress={() => navigation.navigate("Listings")}
      />
      <Pressable
        style={styles.rectanglePressable3}
        onPress={() => navigation.navigate("InitialLandingPage")}
      />
      <Text style={styles.logOutText}>Log out</Text>
      <Text style={styles.settingsText}>Settings</Text>
      <Text style={styles.postAJob}>Post a Job</Text>
      <Text style={styles.jobListingsText}>Job listings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "absolute",
    top: 60,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: 428,
    height: 60,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    width: 428,
    height: 60,
  },
  rectanglePressable2: {
    position: "absolute",
    top: 120,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: 428,
    height: 60,
  },
  rectanglePressable3: {
    position: "absolute",
    top: 180,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: 428,
    height: 60,
  },
  logOutText: {
    position: "absolute",
    top: 195,
    left: 33,
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  settingsText: {
    position: "absolute",
    top: 15,
    left: 33,
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  postAJob: {
    position: "absolute",
    top: 75,
    left: 33,
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  jobListingsText: {
    position: "absolute",
    top: 135,
    left: 33,
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  menuView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    width: 428,
    height: 240,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Menu;
