import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Hired = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hiredView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons24.png")}
          />
          <Text style={styles.hiredEmailHasBeenSentTo}>
            <Text style={styles.hiredEmailHasContainer}>
              <Text style={styles.hiredText}>Hired.</Text>
              <Text style={styles.emailHasBeen}>
                Email has been sent to the applicant
              </Text>
            </Text>
          </Text>
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("ViewListing")}
        >
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
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
  hiredText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  emailHasBeen: {
    margin: 0,
  },
  hiredEmailHasContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hiredEmailHasBeenSentTo: {
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
    width: 204,
    height: 107,
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
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  hiredView: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Hired;
