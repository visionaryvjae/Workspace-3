import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResultsView}>
      <Image
        style={styles.fontAwesomeIcons}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons37.png")}
      />
      <Image
        style={styles.fontAwesomeIcons1}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons37.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.text}>{`<`}</Text>
      <Text style={styles.text1}>{`<`}</Text>
      <View style={styles.jobComponentView}>
        <View style={styles.rectangleView1} />
        <View style={styles.companyIconView} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-122.png")}
        />
        <Text style={styles.jobTitleText}>Job Title</Text>
        <Text style={styles.generalAreaText1}>
          <Text style={styles.generalAreaText}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons2}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons39.png")}
        />
      </View>
      <Pressable
        style={styles.jobComponentPressable}
        onPress={() => navigation.navigate("JobDescription")}
      >
        <View style={styles.rectangleView2} />
        <View style={styles.companyIconView1} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-122.png")}
        />
        <Text style={styles.jobTitleText1}>Job Title</Text>
        <Text style={styles.generalAreaText3}>
          <Text style={styles.generalAreaText2}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText1}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons3}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons40.png")}
        />
      </Pressable>
      <View style={styles.jobComponentView1}>
        <View style={styles.rectangleView3} />
        <View style={styles.companyIconView2} />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector-122.png")}
        />
        <Text style={styles.jobTitleText2}>Job Title</Text>
        <Text style={styles.generalAreaText5}>
          <Text style={styles.generalAreaText4}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText2}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons4}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons41.png")}
        />
      </View>
      <View style={styles.jobComponentView2}>
        <View style={styles.rectangleView4} />
        <View style={styles.companyIconView3} />
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector-122.png")}
        />
        <Text style={styles.jobTitleText3}>Job Title</Text>
        <Text style={styles.generalAreaText7}>
          <Text style={styles.generalAreaText6}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText3}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons5}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons42.png")}
        />
      </View>
      <View style={styles.jobComponentView3}>
        <View style={styles.rectangleView5} />
        <Text style={styles.informationTechText}>Information Tech</Text>
      </View>
      <View style={styles.jobComponentView4}>
        <View style={styles.rectangleView6} />
        <Text style={styles.fullTimeText}>Full time</Text>
      </View>
      <View style={styles.jobComponentView5}>
        <View style={styles.rectangleView7} />
        <View style={styles.companyIconView4} />
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover"
          source={require("../assets/vector-122.png")}
        />
        <Text style={styles.jobTitleText4}>Job Title</Text>
        <Text style={styles.generalAreaText9}>
          <Text style={styles.generalAreaText8}>General Area</Text>
        </Text>
        <Text style={styles.companyNameText4}>Company Name</Text>
        <Image
          style={styles.fontAwesomeIcons6}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons43.png")}
        />
      </View>
      <View style={styles.searchBarView}>
        <Pressable
          style={styles.softwareEngineerPressable}
          onPress={() => navigation.navigate("SearchEntry")}
        >
          <Text style={styles.softwareEngineerText}>Software engineer</Text>
        </Pressable>
        <Image
          style={styles.fontAwesomeIcons7}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons44.png")}
        />
        <Image
          style={styles.fontAwesomeIcons8}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons45.png")}
        />
      </View>
      <Text style={styles.jobsFoundText}>50 jobs found</Text>
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
    bottom: "2.13%",
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
    bottom: "2.13%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleView: {
    position: "absolute",
    height: "4.1%",
    width: "9.81%",
    top: "6.16%",
    right: "86.92%",
    bottom: "89.74%",
    left: "3.27%",
    borderRadius: 6,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
  },
  text: {
    position: "absolute",
    height: "3.35%",
    width: "2.57%",
    top: "6.16%",
    right: "90.65%",
    bottom: "90.5%",
    left: "6.78%",
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
    height: "3.35%",
    width: "2.57%",
    top: "6.16%",
    right: "90.65%",
    bottom: "90.5%",
    left: "6.78%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
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
    top: "840.53%",
    right: "76.81%",
    bottom: "-799.88%",
    left: "9.58%",
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
  jobComponentView: {
    position: "absolute",
    height: "9.72%",
    width: "89.49%",
    top: "79.59%",
    right: "5.61%",
    bottom: "10.69%",
    left: "4.91%",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
  },
  companyIconView1: {
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
  vectorIcon1: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "347.19%",
    right: "76.81%",
    bottom: "-306.55%",
    left: "9.58%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  jobTitleText1: {
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
  generalAreaText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText3: {
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
  companyNameText1: {
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
  fontAwesomeIcons3: {
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
    height: "9.72%",
    width: "89.49%",
    top: "31.64%",
    right: "5.61%",
    bottom: "58.64%",
    left: "4.91%",
  },
  rectangleView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
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
    top: "593.86%",
    right: "77.59%",
    bottom: "-553.22%",
    left: "8.8%",
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
  jobComponentView1: {
    position: "absolute",
    height: "9.72%",
    width: "89.49%",
    top: "55.62%",
    right: "6.31%",
    bottom: "34.67%",
    left: "4.21%",
  },
  rectangleView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#6d9773",
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
    backgroundColor: "#f5f5f5",
  },
  vectorIcon3: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "717.19%",
    right: "76.54%",
    bottom: "-676.55%",
    left: "9.84%",
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
    color: "#f3f3f3",
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
    color: "#e8e8e8",
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
    color: "#d9d9d9",
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
    height: "9.72%",
    width: "89.49%",
    top: "67.6%",
    right: "5.37%",
    bottom: "22.68%",
    left: "5.14%",
  },
  rectangleView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  informationTechText: {
    position: "absolute",
    height: "67.35%",
    width: "82.5%",
    top: "21.73%",
    right: "9%",
    bottom: "10.92%",
    left: "8.5%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
  },
  jobComponentView3: {
    position: "absolute",
    height: "3.78%",
    width: "34.35%",
    top: "19.65%",
    right: "58.41%",
    bottom: "76.57%",
    left: "7.24%",
  },
  rectangleView6: {
    position: "absolute",
    height: "100%",
    width: "96.47%",
    top: "0%",
    right: "1.88%",
    bottom: "0%",
    left: "1.65%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  fullTimeText: {
    position: "absolute",
    height: "67.35%",
    width: "100%",
    top: "22.86%",
    right: "0%",
    bottom: "9.79%",
    left: "0%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
  },
  jobComponentView4: {
    position: "absolute",
    height: "3.78%",
    width: "28.34%",
    top: "19.65%",
    right: "26.8%",
    bottom: "76.57%",
    left: "44.86%",
  },
  rectangleView7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#6d9773",
  },
  companyIconView4: {
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
  vectorIcon4: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "470.53%",
    right: "76.81%",
    bottom: "-429.88%",
    left: "9.58%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  jobTitleText4: {
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
    color: "#f3f3f3",
    textAlign: "left",
  },
  generalAreaText8: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText9: {
    position: "absolute",
    height: "18.13%",
    width: "17.71%",
    top: "62.22%",
    right: "4.74%",
    bottom: "19.65%",
    left: "77.55%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
  },
  companyNameText4: {
    position: "absolute",
    height: "16.69%",
    width: "21.96%",
    top: "48.89%",
    right: "54.02%",
    bottom: "34.42%",
    left: "24.02%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
  },
  fontAwesomeIcons6: {
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
  jobComponentView5: {
    position: "absolute",
    height: "9.72%",
    width: "89.49%",
    top: "43.63%",
    right: "5.61%",
    bottom: "46.65%",
    left: "4.91%",
  },
  softwareEngineerText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 226,
    height: 25,
  },
  softwareEngineerPressable: {
    position: "absolute",
    top: 12,
    right: 76,
  },
  fontAwesomeIcons7: {
    position: "absolute",
    top: 12,
    left: 298,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  fontAwesomeIcons8: {
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
    height: "5.29%",
    width: "85.28%",
    top: "11.66%",
    right: "6.54%",
    bottom: "83.05%",
    left: "8.18%",
    borderRadius: 44,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    opacity: 0.7,
  },
  jobsFoundText: {
    position: "absolute",
    height: "1.94%",
    width: "27.34%",
    top: "27.43%",
    right: "65.65%",
    bottom: "70.63%",
    left: "7.01%",
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  searchResultsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden",
  },
});

export default SearchResults;
