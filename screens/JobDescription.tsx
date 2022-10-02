import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JobDescription = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.jobDescriptionView}>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Apply")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.applyText}>Apply</Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <View style={styles.companyIconView} />
      <Text style={styles.jobTitleText}>Job Title</Text>
      <Text style={styles.generalAreaText1}>
        <Text style={styles.generalAreaText}>General Area</Text>
      </Text>
      <View style={styles.jobComponentView}>
        <View style={styles.rectangleView3} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-127.png")}
        />
        <Text style={styles.informationTechnologyText}>
          Information Technology
        </Text>
      </View>
      <View style={styles.jobComponentView1}>
        <View style={styles.rectangleView4} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-128.png")}
        />
        <Text style={styles.fullTimeText}>Full time</Text>
      </View>
      <Image
        style={styles.favouriteIcon}
        resizeMode="cover"
        source={require("../assets/favourite.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.companyIconView1} />
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.requirementsText}>Requirements</Text>
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar sit amet sem vel hendrerit. Suspendisse
            vehicula dui a elit accumsan, eget imperdiet nibh accumsan.
            Suspendisse iaculis ex nec efficitur sodales. Curabitur vel commodo
            neque, sit amet volutpat sapien. Maecenas quam velit, facilisis vel
            posuere eget, consectetur vel justo. Duis finibus risus ac est
            faucibus cursus. Sed non massa ultrices, suscipit nunc ut, vulputate
            justo. Etiam venenatis odio vel tellus maximus rhoncus. In pharetra
            orci non ultricies auctor. Pellentesque lobortis null
          </Text>
          <Text style={styles.loremIpsumDolorSitAmetLor}>
            <Text style={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text style={styles.loremIpsumText}>Lorem ipsum</Text>
            <Text style={styles.loremIpsumText1}>Lorem ipsum</Text>
            <Text style={styles.lorenIpsumText}>Loren ipsum</Text>
          </Text>
          <Text style={styles.companyText}>Company</Text>
          <Text style={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar sit amet sem vel hendrerit. Suspendisse
            vehicula dui a elit accumsan, eget imperdiet nibh accumsan.
            Suspendisse iaculis ex nec efficitur sodales. Curabitur vel commodo
            neque, sit amet volutpat sapien. Maecenas quam velit, facilisis vel
            posuere eget, consectetur vel justo. Duis finibus risus ac est
            faucibus cursus. Sed non massa ultrices, suscipit nunc ut, vulputate
            justo. Etiam venenatis odio vel tellus maximus rhoncus. In pharetra
            orci non ultricies auctor. Pellentesque lobortis null
          </Text>
          <Text style={styles.monthsText}>2 months</Text>
          <Text style={styles.companyNameText}>Company Name</Text>
          <Text style={styles.durationText}>Duration</Text>
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons46.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(109, 151, 115, 0.63)",
    width: 428,
    height: 289,
  },
  rectangleView1: {
    position: "absolute",
    top: 235,
    left: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    width: 428,
    height: 691,
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
  applyText: {
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
  signUpPressable: {
    position: "absolute",
    top: 834,
    left: 77,
    width: 273,
    height: 55,
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "#0c3b2e",
  },
  text: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "7.89%",
    right: "38.1%",
    bottom: "10.53%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#f3f3f3",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backPressable: {
    position: "absolute",
    height: "4.1%",
    width: "9.81%",
    top: "6.16%",
    right: "86.92%",
    bottom: "89.74%",
    left: "3.27%",
  },
  companyIconView: {
    position: "absolute",
    height: "5.68%",
    width: "12.18%",
    top: "12.2%",
    right: "72.86%",
    bottom: "82.11%",
    left: "14.95%",
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  jobTitleText: {
    position: "absolute",
    height: "4.49%",
    width: "22.66%",
    top: "12.96%",
    right: "46.73%",
    bottom: "82.55%",
    left: "30.61%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
  },
  generalAreaText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generalAreaText1: {
    position: "absolute",
    height: "1.76%",
    width: "15.85%",
    top: "16.2%",
    right: "53.54%",
    bottom: "82.04%",
    left: "30.61%",
    fontSize: 10.93,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    height: "83.68%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "16.32%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "rgba(12, 59, 46, 0.7)",
  },
  vectorIcon: {
    position: "absolute",
    height: "73.29%",
    width: "39.8%",
    top: "506.71%",
    right: "21.55%",
    bottom: "-480%",
    left: "38.64%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  informationTechnologyText: {
    position: "absolute",
    height: "56.36%",
    width: "82.5%",
    top: "29.09%",
    right: "7.5%",
    bottom: "14.55%",
    left: "10%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "center",
  },
  jobComponentView: {
    position: "absolute",
    height: "4.32%",
    width: "35.05%",
    top: "20.73%",
    right: "55.61%",
    bottom: "74.95%",
    left: "9.35%",
  },
  rectangleView4: {
    position: "absolute",
    height: "83.68%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "16.32%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "rgba(12, 59, 46, 0.7)",
  },
  vectorIcon1: {
    position: "absolute",
    height: "73.29%",
    width: "39.8%",
    top: "506.71%",
    right: "-167.78%",
    bottom: "-480%",
    left: "227.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  fullTimeText: {
    position: "absolute",
    height: "57.07%",
    width: "74.05%",
    top: "25%",
    right: "11.95%",
    bottom: "17.93%",
    left: "14%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#f3f3f3",
    textAlign: "center",
  },
  jobComponentView1: {
    position: "absolute",
    height: "4.32%",
    width: "23.36%",
    top: "20.73%",
    right: "26.17%",
    bottom: "74.95%",
    left: "50.47%",
  },
  favouriteIcon: {
    position: "absolute",
    height: "2.16%",
    width: "4.67%",
    top: "6.59%",
    right: "6.31%",
    bottom: "91.25%",
    left: "89.02%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  companyIconView1: {
    position: "absolute",
    height: "4.82%",
    width: "14.09%",
    top: "59.85%",
    right: "84.83%",
    bottom: "35.32%",
    left: "1.08%",
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
  },
  descriptionText: {
    position: "absolute",
    height: "2.02%",
    width: "27.3%",
    top: "0%",
    right: "72.7%",
    bottom: "97.98%",
    left: "0%",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  requirementsText: {
    position: "absolute",
    height: "2.02%",
    width: "32.7%",
    top: "36.11%",
    right: "66.49%",
    bottom: "61.87%",
    left: "0.81%",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    height: "31.9%",
    width: "97.03%",
    top: "3.21%",
    right: "2.43%",
    bottom: "64.89%",
    left: "0.54%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  loremIpsumDolor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  loremIpsumText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  loremIpsumText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lorenIpsumText: {
    margin: 0,
  },
  loremIpsumDolorSitAmetLor: {
    position: "absolute",
    height: "9.07%",
    width: "99.46%",
    top: "38.77%",
    right: "0%",
    bottom: "52.15%",
    left: "0.54%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  companyText: {
    position: "absolute",
    height: "2.02%",
    width: "22.7%",
    top: "56.65%",
    right: "76.49%",
    bottom: "41.34%",
    left: "0.81%",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    height: "35.29%",
    width: "97.03%",
    top: "64.71%",
    right: "2.16%",
    bottom: "0%",
    left: "0.81%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  monthsText: {
    position: "absolute",
    height: "2.29%",
    width: "25.14%",
    top: "52.34%",
    right: "70.27%",
    bottom: "45.37%",
    left: "4.59%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  companyNameText: {
    position: "absolute",
    height: "2.38%",
    width: "52.43%",
    top: "61.04%",
    right: "30%",
    bottom: "36.57%",
    left: "17.57%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  durationText: {
    position: "absolute",
    height: "2.02%",
    width: "20.27%",
    top: "49.95%",
    right: "69.19%",
    bottom: "48.03%",
    left: "10.54%",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  fontAwesomeIcons: {
    position: "absolute",
    height: "2.2%",
    width: "6.49%",
    top: "49.86%",
    right: "91.89%",
    bottom: "47.94%",
    left: "1.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    height: "185.86%",
    width: "86.45%",
    top: "4.94%",
    right: "6.78%",
    bottom: "-90.8%",
    left: "6.78%",
  },
  frameView: {
    position: "absolute",
    top: 235,
    left: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
    width: 428,
    height: 587,
  },
  jobDescriptionView: {
    position: "relative",
    backgroundColor: "#f3f3f3",
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden",
  },
});

export default JobDescription;
