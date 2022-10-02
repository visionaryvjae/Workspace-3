import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favourites = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.favouritesView}>
      <Image
        style={styles.fontAwesomeIcons}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons19.png")}
      />
      <Image
        style={styles.fontAwesomeIcons1}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons19.png")}
      />
      <Text style={styles.favouritesText}>Favourites</Text>
      <Pressable
        style={styles.jobComponentPressable}
        onPress={() => navigation.navigate("JobDescription")}
      >
        <View style={styles.rectangleView} />
        <View style={styles.companyIconView} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-129.png")}
        />
        <Text style={styles.jobTitleText}>Job Title</Text>
        <Text style={styles.generalAreaText1}>
          <Text style={styles.generalAreaText}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons2}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons65.png")}
        />
      </Pressable>
      <View style={styles.jobComponentView1}>
        <View style={styles.rectangleView1} />
        <View style={styles.companyIconView1} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-129.png")}
        />
        <Text style={styles.jobTitleText1}>Job Title</Text>
        <Text style={styles.generalAreaText3}>
          <Text style={styles.generalAreaText2}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText1}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons3}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons66.png")}
        />
        <View style={styles.jobComponentView}>
          <View style={styles.rectangleView2} />
          <View style={styles.companyIconView2} />
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector-129.png")}
          />
          <Text style={styles.jobTitleText2}>Job Title</Text>
          <Text style={styles.generalAreaText5}>
            <Text style={styles.generalAreaText4}>General Area</Text>
          </Text>
          <Text style={styles.companyNameText2}>Company Name</Text>
          <Image
            style={styles.fontAwesomeIcons4}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons67.png")}
          />
        </View>
      </View>
      <View style={styles.jobComponentView2}>
        <View style={styles.rectangleView3} />
        <View style={styles.companyIconView3} />
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector-129.png")}
        />
        <Text style={styles.jobTitleText3}>Job Title</Text>
        <Text style={styles.generalAreaText7}>
          <Text style={styles.generalAreaText6}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText3}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons5}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons68.png")}
        />
      </View>
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
  favouritesText: {
    position: "absolute",
    height: "3.89%",
    width: "35.28%",
    top: "7.56%",
    right: "32.24%",
    bottom: "88.55%",
    left: "32.48%",
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView: {
    position: "absolute",
    height: "58.48%",
    width: "13.61%",
    top: "21.05%",
    right: "82.05%",
    bottom: "20.47%",
    left: "4.34%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "153.64%",
    right: "82.29%",
    bottom: "-112.99%",
    left: "4.1%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  jobTitleText: {
    position: "absolute",
    height: "46.23%",
    width: "25.33%",
    top: "19.26%",
    right: "50.65%",
    bottom: "34.51%",
    left: "24.02%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  generalAreaText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText1: {
    position: "absolute",
    height: "18.13%",
    width: "17.71%",
    top: "62.22%",
    right: "4.74%",
    bottom: "19.65%",
    left: "77.55%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  companyNameText: {
    position: "absolute",
    height: "16.69%",
    width: "21.96%",
    top: "48.89%",
    right: "54.02%",
    bottom: "34.42%",
    left: "24.02%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  fontAwesomeIcons2: {
    position: "absolute",
    height: "22.22%",
    width: "5.22%",
    top: "13.33%",
    right: "4.96%",
    bottom: "64.44%",
    left: "89.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  jobComponentPressable: {
    position: "absolute",
    height: "10.8%",
    width: "100%",
    top: "14.25%",
    right: "0%",
    bottom: "74.95%",
    left: "0%",
  },
  rectangleView1: {
    position: "absolute",
    height: "50%",
    width: "99.77%",
    top: "0%",
    right: "0.23%",
    bottom: "50%",
    left: "0%",
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView1: {
    position: "absolute",
    height: "29.24%",
    width: "13.58%",
    top: "10.53%",
    right: "82.09%",
    bottom: "60.23%",
    left: "4.33%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon1: {
    position: "absolute",
    height: "29.68%",
    width: "13.58%",
    top: "176.82%",
    right: "82.33%",
    bottom: "-106.5%",
    left: "4.09%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  jobTitleText1: {
    position: "absolute",
    height: "23.11%",
    width: "25.27%",
    top: "9.63%",
    right: "50.77%",
    bottom: "67.26%",
    left: "23.96%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  generalAreaText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText3: {
    position: "absolute",
    height: "9.06%",
    width: "17.67%",
    top: "31.11%",
    right: "4.97%",
    bottom: "59.82%",
    left: "77.36%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  companyNameText1: {
    position: "absolute",
    height: "8.35%",
    width: "21.91%",
    top: "24.44%",
    right: "54.13%",
    bottom: "67.21%",
    left: "23.96%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  fontAwesomeIcons3: {
    position: "absolute",
    height: "11.11%",
    width: "5.21%",
    top: "6.67%",
    right: "5.18%",
    bottom: "82.22%",
    left: "89.61%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView2: {
    position: "absolute",
    height: "58.48%",
    width: "13.61%",
    top: "21.05%",
    right: "82.05%",
    bottom: "20.47%",
    left: "4.34%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon2: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "453.64%",
    right: "82.06%",
    bottom: "-412.99%",
    left: "4.33%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  jobTitleText2: {
    position: "absolute",
    height: "46.23%",
    width: "25.33%",
    top: "19.26%",
    right: "50.65%",
    bottom: "34.51%",
    left: "24.02%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  generalAreaText4: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText5: {
    position: "absolute",
    height: "18.13%",
    width: "17.71%",
    top: "62.22%",
    right: "4.74%",
    bottom: "19.65%",
    left: "77.55%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  companyNameText2: {
    position: "absolute",
    height: "16.69%",
    width: "21.96%",
    top: "48.89%",
    right: "54.02%",
    bottom: "34.42%",
    left: "24.02%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  fontAwesomeIcons4: {
    position: "absolute",
    height: "22.22%",
    width: "5.22%",
    top: "13.33%",
    right: "4.96%",
    bottom: "64.44%",
    left: "89.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  jobComponentView: {
    position: "absolute",
    height: "50%",
    width: "99.77%",
    top: "50%",
    right: "0%",
    bottom: "0%",
    left: "0.23%",
  },
  jobComponentView1: {
    position: "absolute",
    height: "21.6%",
    width: "100.23%",
    top: "35.85%",
    right: "-0.23%",
    bottom: "42.55%",
    left: "0%",
  },
  rectangleView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView3: {
    position: "absolute",
    height: "58.48%",
    width: "13.61%",
    top: "21.05%",
    right: "82.05%",
    bottom: "20.47%",
    left: "4.34%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon3: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "253.64%",
    right: "82.29%",
    bottom: "-212.99%",
    left: "4.1%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  jobTitleText3: {
    position: "absolute",
    height: "46.23%",
    width: "25.33%",
    top: "19.26%",
    right: "50.65%",
    bottom: "34.51%",
    left: "24.02%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  generalAreaText6: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText7: {
    position: "absolute",
    height: "18.13%",
    width: "17.71%",
    top: "62.22%",
    right: "4.74%",
    bottom: "19.65%",
    left: "77.55%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  companyNameText3: {
    position: "absolute",
    height: "16.69%",
    width: "21.96%",
    top: "48.89%",
    right: "54.02%",
    bottom: "34.42%",
    left: "24.02%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  fontAwesomeIcons5: {
    position: "absolute",
    height: "22.22%",
    width: "5.22%",
    top: "13.33%",
    right: "4.96%",
    bottom: "64.44%",
    left: "89.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  jobComponentView2: {
    position: "absolute",
    height: "10.8%",
    width: "100%",
    top: "25.05%",
    right: "0%",
    bottom: "64.15%",
    left: "0%",
  },
  favouritesView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 934,
    overflow: "hidden",
  },
});

export default Favourites;
