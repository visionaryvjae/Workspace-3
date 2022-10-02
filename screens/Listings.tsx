import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Listings = () => {
  return (
    <View style={styles.listingsView}>
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
      <Text style={styles.jobTitleText}>Job Title</Text>
      <Text style={styles.posted3DaysAgo}>Posted 3 days ago</Text>
      <Text style={styles.paymentTermsText}>{`Payment terms `}</Text>
      <Text style={styles.jobListingsText}>Job listings</Text>
      <Text style={styles.applicantsText}>Applicants</Text>
      <Text style={styles.text2}>10</Text>
      <Text style={styles.hiredText}>Hired</Text>
      <Text style={styles.text3}>1</Text>
      <Image
        style={styles.fontAwesomeIcons2}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons10.png")}
      />
      <Text style={styles.posted3DaysAgo1}>Posted 3 days ago</Text>
      <Text style={styles.posted3DaysAgo2}>Posted 3 days ago</Text>
      <View style={styles.rectangleView2} />
      <Text style={styles.jobTitleText1}>Job Title</Text>
      <Text style={styles.posted3DaysAgo3}>Posted 3 days ago</Text>
      <Text style={styles.paymentTermsText1}>{`Payment terms `}</Text>
      <Text style={styles.applicantsText1}>Applicants</Text>
      <Text style={styles.text4}>20</Text>
      <Text style={styles.hiredText1}>Hired</Text>
      <Text style={styles.text5}>0</Text>
      <Image
        style={styles.fontAwesomeIcons3}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons10.png")}
      />
      <Text style={styles.posted3DaysAgo4}>Posted 3 days ago</Text>
      <Text style={styles.posted9DaysAgo}>Posted 9 days ago</Text>
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
    height: 263,
  },
  jobTitleText: {
    position: "absolute",
    height: "4.49%",
    width: "22.66%",
    top: "19.33%",
    right: "67.99%",
    bottom: "76.18%",
    left: "9.35%",
    fontSize: 23,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  posted3DaysAgo: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "29.7%",
    right: "57.71%",
    bottom: "68.68%",
    left: "9.35%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  paymentTermsText: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "26.89%",
    right: "57.71%",
    bottom: "71.49%",
    left: "9.35%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  jobListingsText: {
    position: "absolute",
    top: 70,
    left: 132,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  applicantsText: {
    position: "absolute",
    top: 343,
    left: 40,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 103,
    height: 35,
  },
  text2: {
    position: "absolute",
    top: 321,
    left: 40,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  hiredText: {
    position: "absolute",
    top: 343,
    left: 274,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 103,
    height: 35,
  },
  text3: {
    position: "absolute",
    top: 321,
    left: 274,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  fontAwesomeIcons2: {
    position: "absolute",
    height: "2.92%",
    width: "6.07%",
    top: "16.41%",
    right: "5.84%",
    bottom: "80.67%",
    left: "88.08%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  posted3DaysAgo1: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "29.7%",
    right: "57.71%",
    bottom: "68.68%",
    left: "9.35%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  posted3DaysAgo2: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "29.7%",
    right: "57.71%",
    bottom: "68.68%",
    left: "9.35%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 395,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 428,
    height: 263,
  },
  jobTitleText1: {
    position: "absolute",
    height: "4.49%",
    width: "22.66%",
    top: "47.73%",
    right: "68.46%",
    bottom: "47.77%",
    left: "8.88%",
    fontSize: 23,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  posted3DaysAgo3: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "58.1%",
    right: "58.18%",
    bottom: "40.28%",
    left: "8.88%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  paymentTermsText1: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "55.29%",
    right: "58.18%",
    bottom: "43.09%",
    left: "8.88%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  applicantsText1: {
    position: "absolute",
    top: 606,
    left: 38,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 103,
    height: 35,
  },
  text4: {
    position: "absolute",
    top: 584,
    left: 38,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  hiredText1: {
    position: "absolute",
    top: 606,
    left: 272,
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 103,
    height: 35,
  },
  text5: {
    position: "absolute",
    top: 584,
    left: 272,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  fontAwesomeIcons3: {
    position: "absolute",
    height: "2.92%",
    width: "6.07%",
    top: "44.82%",
    right: "6.31%",
    bottom: "52.27%",
    left: "87.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  posted3DaysAgo4: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "58.1%",
    right: "58.18%",
    bottom: "40.28%",
    left: "8.88%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  posted9DaysAgo: {
    position: "absolute",
    height: "1.62%",
    width: "32.94%",
    top: "58.1%",
    right: "58.18%",
    bottom: "40.28%",
    left: "8.88%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  listingsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Listings;
