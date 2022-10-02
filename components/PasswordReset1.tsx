import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type PasswordReset1Type = {
  onClose?: () => void;
};

const PasswordReset1 = ({ onClose }: PasswordReset1Type) => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordResetView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons57.png")}
          />
          <Text style={styles.checkYourInbox}>Check your inbox</Text>
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("false")}
        >
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Text style={styles.xText}>X</Text>
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
    top: 262,
    left: 139,
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  checkYourInbox: {
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
  frameView: {
    position: "relative",
    width: 428,
    height: 800,
    flexShrink: 0,
  },
  passwordResetView: {
    position: "relative",
    height: 807,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default PasswordReset1;
