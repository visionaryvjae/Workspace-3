import * as React from "react";
import { useState, useCallback } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Modal,
  View,
} from "react-native";
import EmployeeSearch from "../components/EmployeeSearch";
import { useNavigation } from "@react-navigation/native";

const EmployPeople = () => {
  const [fontAwesomeIconsVisible, setFontAwesomeIconsVisible] = useState(false);
  const navigation = useNavigation();

  const openFontAwesomeIcons = useCallback(() => {
    setFontAwesomeIconsVisible(true);
  }, []);

  const closeFontAwesomeIcons = useCallback(() => {
    setFontAwesomeIconsVisible(false);
  }, []);
  return (
    <>
      <View style={styles.employPeopleView}>
        <StatusBar barStyle="light-content" />
        <View style={styles.searchBarView}>
          <Text style={styles.searchHereText}>Search here</Text>
          <Pressable
            style={styles.fontAwesomeIcons}
            onPress={openFontAwesomeIcons}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/fontawesome--icons15.png")}
            />
          </Pressable>
          <Image
            style={styles.fontAwesomeIcons1}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons16.png")}
          />
        </View>
        <Pressable
          style={styles.potentialEmployeePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.rectangleView} />
          <View style={styles.companyIconView} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-12.png")}
          />
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.generalAreaText1}>
            <Text style={styles.generalAreaText}>General Area</Text>
          </Text>
          <Text style={styles.jobTitleText}>Job Title</Text>
          <Text style={styles.budgetText}>Budget</Text>
          <Image
            style={styles.fontAwesomeIcons2}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons17.png")}
          />
        </Pressable>
        <View style={styles.potentialEmployeeView}>
          <View style={styles.rectangleView1} />
          <View style={styles.companyIconView1} />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector-12.png")}
          />
          <Text style={styles.nameText1}>Name</Text>
          <Text style={styles.generalAreaText3}>
            <Text style={styles.generalAreaText2}>General Area</Text>
          </Text>
          <Text style={styles.jobTitleText1}>Job Title</Text>
          <Image
            style={styles.fontAwesomeIcons3}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons18.png")}
          />
          <Text style={styles.budgetText1}>Budget</Text>
        </View>
        <View style={styles.groupView}>
          <Text style={styles.findWorkersNearYou}>Find workers near you</Text>
        </View>
        <Pressable
          style={styles.appBarPressable}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Profile1" })
          }
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/app-bar10.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={fontAwesomeIconsVisible}>
        <View style={styles.fontAwesomeIconsOverlay}>
          <Pressable
            style={styles.fontAwesomeIconsBg}
            onPress={closeFontAwesomeIcons}
          />
          <EmployeeSearch onClose={closeFontAwesomeIcons} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIconsOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fontAwesomeIconsBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  searchHereText: {
    position: "absolute",
    top: 12,
    right: 76,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 226,
    height: 25,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  fontAwesomeIcons: {
    position: "absolute",
    left: 298,
    top: 12,
  },
  fontAwesomeIcons1: {
    position: "absolute",
    height: "65.31%",
    width: "9.5%",
    top: "16.33%",
    right: "85.46%",
    bottom: "18.37%",
    left: "5.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  searchBarView: {
    position: "absolute",
    top: 91,
    left: 33,
    borderRadius: 44,
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    width: 365,
    height: 49,
    opacity: 0.7,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
    width: 383,
    height: 150,
  },
  companyIconView: {
    position: "absolute",
    top: 31.58,
    left: 16.61,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 52.14,
    height: 87.72,
  },
  vectorIcon: {
    position: "absolute",
    top: 261.46,
    left: 38.69,
    width: 52.14,
    height: 89.04,
  },
  nameText: {
    position: "absolute",
    top: 28.33,
    left: 92,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 161,
    height: 70,
  },
  generalAreaText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText1: {
    position: "absolute",
    top: 93.33,
    left: 297,
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 67.83,
    height: 27.19,
  },
  jobTitleText: {
    position: "absolute",
    top: 62,
    left: 92,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 84.1,
    height: 25.04,
  },
  budgetText: {
    position: "absolute",
    top: 103,
    left: 92,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 84.1,
    height: 25.04,
  },
  fontAwesomeIcons2: {
    position: "absolute",
    top: 18,
    left: 332,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  potentialEmployeePressable: {
    position: "absolute",
    top: 229,
    left: 23,
    width: 383,
    height: 150,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#6d9773",
    width: 383,
    height: 150,
  },
  companyIconView1: {
    position: "absolute",
    top: 31.58,
    left: 16.61,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 52.14,
    height: 87.72,
  },
  vectorIcon1: {
    position: "absolute",
    top: 438.46,
    left: 35.69,
    width: 52.14,
    height: 89.04,
  },
  nameText1: {
    position: "absolute",
    top: 27,
    left: 92,
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
    width: 97,
    height: 24,
  },
  generalAreaText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText3: {
    position: "absolute",
    top: 93.33,
    left: 297,
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
    width: 67.83,
    height: 27.19,
  },
  jobTitleText1: {
    position: "absolute",
    top: 64,
    left: 95,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
    width: 84.1,
    height: 25.04,
  },
  fontAwesomeIcons3: {
    position: "absolute",
    top: 22,
    left: 335,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  budgetText1: {
    position: "absolute",
    top: 103,
    left: 92,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 84.1,
    height: 25.04,
  },
  potentialEmployeeView: {
    position: "absolute",
    top: 406,
    left: 20,
    width: 383,
    height: 150,
  },
  findWorkersNearYou: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 395,
    height: 35,
  },
  groupView: {
    position: "absolute",
    top: 167,
    left: 15,
    width: 395,
    height: 35,
  },
  icon1: {
    width: 428,
    height: 72,
  },
  appBarPressable: {
    position: "absolute",
    left: 0,
    top: 854,
  },
  employPeopleView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default EmployPeople;
