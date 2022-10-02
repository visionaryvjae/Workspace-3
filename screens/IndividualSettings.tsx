import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IndividualSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.individualSettingsView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Profile1" })
        }
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
        <Text style={styles.text1}>{`<`}</Text>
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("ProfileEdit")}
      />
      <View style={styles.rectangleView1} />
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("ChangePassword")}
      />
      <Text style={styles.settingsText}>Settings</Text>
      <Text style={styles.settingsText1}>Settings</Text>
      <Text style={styles.accountPreferencesText}>Account preferences</Text>
      <Text style={styles.accessibilityText}>Accessibility</Text>
      <Text style={styles.passwordSecurity}>{`Password & security`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  groupPressable: {
    position: "absolute",
    height: "4.1%",
    width: "9.81%",
    top: "6.16%",
    right: "86.92%",
    bottom: "89.74%",
    left: "3.27%",
  },
  rectanglePressable: {
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
  rectangleView1: {
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
  rectanglePressable1: {
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
  passwordSecurity: {
    position: "absolute",
    top: 364,
    left: 40,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  individualSettingsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 934,
    overflow: "hidden",
  },
});

export default IndividualSettings;
