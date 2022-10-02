import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CompanyDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.companyDetailsView}>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("BusSignUp")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <Text style={styles.companyDetailsText}>Company Details</Text>
      <View style={styles.cityView}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.cityText}>City*</Text>
      </View>
      <View style={styles.countryView}>
        <View style={styles.rectangleView3} />
        <View style={styles.rectangleView4} />
        <Text style={styles.countryText}>Country*</Text>
      </View>
      <View style={styles.countryView1}>
        <View style={styles.rectangleView5} />
        <View style={styles.rectangleView6} />
        <Text style={styles.aboutUsText}>About us</Text>
      </View>
      <View style={styles.cityView1}>
        <View style={styles.rectangleView7} />
        <View style={styles.rectangleView8} />
        <Text style={styles.companyTypeText}>Company type*</Text>
      </View>
      <View style={styles.countryView2}>
        <View style={styles.rectangleView9} />
        <View style={styles.rectangleView10} />
        <Text style={styles.industryText}>{`Industry* `}</Text>
      </View>
      <View style={styles.genderGroupView}>
        <View style={styles.rectangleView11} />
        <View style={styles.rectangleView12} />
        <Text style={styles.companySizeText}>{`Company size `}</Text>
      </View>
      <Pressable
        style={styles.addPressable}
        onPress={() => navigation.navigate("ProfileDetails")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.addText}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 16,
    bottom: 7,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  backPressable: {
    position: "absolute",
    top: 57,
    left: 13,
    width: 42,
    height: 38,
  },
  companyDetailsText: {
    position: "absolute",
    top: 129,
    left: 34,
    fontSize: 22,
    textDecoration: "underline",
    letterSpacing: 3.3,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#0c3b2e",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 50,
    height: 25,
  },
  cityText: {
    position: "absolute",
    top: 0,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  cityView: {
    position: "absolute",
    top: 423,
    right: 26,
    width: 379,
    height: 70,
  },
  rectangleView3: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 90,
    height: 25,
  },
  countryText: {
    position: "absolute",
    top: 2,
    left: 26,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  countryView: {
    position: "absolute",
    top: 336,
    right: 26,
    width: 379,
    height: 70,
  },
  rectangleView5: {
    position: "absolute",
    top: 14.59,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 103.41,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  aboutUsText: {
    position: "absolute",
    top: 0,
    left: 26,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 78,
    height: 25,
  },
  countryView1: {
    position: "absolute",
    top: 202,
    right: 26,
    width: 379,
    height: 118,
  },
  rectangleView7: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 140,
    height: 25,
  },
  companyTypeText: {
    position: "absolute",
    top: 0,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  cityView1: {
    position: "absolute",
    top: 684,
    right: 22,
    width: 379,
    height: 70,
  },
  rectangleView9: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  industryText: {
    position: "absolute",
    top: 2,
    left: 26,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  countryView2: {
    position: "absolute",
    top: 510,
    right: 22,
    width: 379,
    height: 70,
  },
  rectangleView11: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 140,
    height: 25,
  },
  companySizeText: {
    position: "absolute",
    top: 1,
    left: 24,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  genderGroupView: {
    position: "absolute",
    top: 597,
    right: 22,
    width: 379,
    height: 70,
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
  addText: {
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
  addPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  companyDetailsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default CompanyDetails;
