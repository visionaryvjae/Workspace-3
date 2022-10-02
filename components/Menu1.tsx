import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Menu1Type = {
  onClose?: () => void;
};

const Menu1 = ({ onClose }: Menu1Type) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuView}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("IndividualSettings")}
      />
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("GetPaid")}
      />
      <Pressable
        style={styles.rectanglePressable2}
        onPress={() => navigation.navigate("false")}
      />
      <Pressable
        style={styles.logOutPressable}
        onPress={() => navigation.navigate("false")}
      >
        <Text style={styles.logOutText}>Log out</Text>
      </Pressable>
      <Text style={styles.cashOutText}>Cash out</Text>
      <Text style={styles.settingsText}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
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
  rectanglePressable1: {
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
  logOutText: {
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  logOutPressable: {
    position: "absolute",
    left: 33,
    top: 135,
  },
  cashOutText: {
    position: "absolute",
    top: 75,
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
  menuView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    width: 428,
    height: 181,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Menu1;
