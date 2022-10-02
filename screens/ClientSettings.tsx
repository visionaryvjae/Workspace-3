import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const ClientSettings = () => {
  return (
    <View style={styles.clientSettingsView}>
      <Image
        style={styles.fontAwesomeIcons}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons.png")}
      />
      <Image
        style={styles.fontAwesomeIcons1}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons.png")}
      />
      <Image
        style={styles.appBarIcon}
        resizeMode="cover"
        source={require("../assets/app-bar.png")}
      />
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
        <Text style={styles.text1}>{`<`}</Text>
      </View>
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />
      <View style={styles.rectangleView5} />
      <Text style={styles.settingsText}>Settings</Text>
      <Text style={styles.settingsText1}>Settings</Text>
      <Text style={styles.accountPreferencesText}>Account preferences</Text>
      <Text style={styles.accessibilityText}>Accessibility</Text>
      <Text style={styles.paymentSettingsText}>Payment Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcons: {
    position: "absolute",
    height: "4.38%",
    width: "8.79%",
    top: "93.5%",
    right: "25.38%",
    bottom: "2.12%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fontAwesomeIcons1: {
    position: "absolute",
    height: "4.38%",
    width: "8.79%",
    top: "93.5%",
    right: "25.38%",
    bottom: "2.12%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  appBarIcon: {
    position: "absolute",
    height: "7.78%",
    width: "100%",
    top: "92.22%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
  },
  text: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "0%",
    right: "38.1%",
    bottom: "18.42%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "0%",
    right: "38.1%",
    bottom: "18.42%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    height: "4.1%",
    width: "9.81%",
    top: "6.16%",
    right: "86.92%",
    bottom: "89.74%",
    left: "3.27%",
  },
  rectangleView1: {
    position: "absolute",
    top: 132,
    left: 2,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 100,
  },
  rectangleView2: {
    position: "absolute",
    top: 432,
    left: 2,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 100,
  },
  rectangleView3: {
    position: "absolute",
    top: 532,
    left: 2,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 100,
  },
  rectangleView4: {
    position: "absolute",
    top: 232,
    left: 2,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 100,
  },
  rectangleView5: {
    position: "absolute",
    top: 332,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 100,
  },
  settingsText: {
    position: "absolute",
    top: 70,
    left: 154,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  settingsText1: {
    position: "absolute",
    top: 70,
    left: 154,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  accountPreferencesText: {
    position: "absolute",
    top: 164,
    left: 35,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  accessibilityText: {
    position: "absolute",
    top: 264,
    left: 35,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  paymentSettingsText: {
    position: "absolute",
    top: 364,
    left: 40,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  clientSettingsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default ClientSettings;
