import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Modal, View, Text } from "react-native";
import Menu from "../components/Menu";

const CompanyProfile = () => {
  const [fontAwesomeIcons2Visible, setFontAwesomeIcons2Visible] =
    useState(false);

  const openFontAwesomeIcons2 = useCallback(() => {
    setFontAwesomeIcons2Visible(true);
  }, []);

  const closeFontAwesomeIcons2 = useCallback(() => {
    setFontAwesomeIcons2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.companyProfileView}>
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
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Pressable
          style={styles.fontAwesomeIcons2}
          onPress={openFontAwesomeIcons2}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons4.png")}
          />
        </Pressable>
        <Text style={styles.nameSurnameText}>Name Surname</Text>
        <Text style={styles.locationText}>Location</Text>
        <View style={styles.companyDetailsView}>
          <View style={styles.frameView}>
            <Text style={styles.companyDescriptionText}>
              Company Description
            </Text>
            <Text style={styles.companySizeText}>Company Size</Text>
            <Text style={styles.industryText}>Industry</Text>
            <Text style={styles.analyticsText}>Analytics</Text>
            <Text style={styles.industryNameText}>Industry name</Text>
            <Text style={styles.smallText}>Small</Text>
            <Text style={styles.employeesText}>1-10 employees</Text>
            <Text style={styles.companyNameText}>Company Name</Text>
            <Text style={styles.taglineText}>Tagline</Text>
            <Text style={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque pulvinar sit amet sem vel hendrerit. Suspendisse
              vehicula dui a elit accumsan, eget imperdiet nibh accumsan.
              Suspendisse iaculis ex nec efficitur sodales. Curabitur vel
              commodo neque, sit amet volutpat sapien. Maecenas quam velit,
              facilisis vel posuere eget, consectetur vel justo. Duis finibus
              risus ac est faucibus cursus. Sed non massa ultrices, suscipit
              nunc ut, vulputate justo. Etiam venenatis odio vel tellus maximus
              rhoncus. In pharetra orci non ultricies auctor. Pellentesque
              lobortis null
            </Text>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={styles.fontAwesomeIcons3}
              resizeMode="cover"
              source={require("../assets/fontawesome--icons5.png")}
            />
            <Text style={styles.jobListingsText}>Job listings</Text>
            <Text style={styles.text}>20</Text>
            <Text style={styles.hiredText}>Hired</Text>
            <Text style={styles.text1}>10</Text>
            <Text style={styles.totalApplicantsText}>Total applicants</Text>
            <Text style={styles.text2}>20</Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={fontAwesomeIcons2Visible}
      >
        <View style={styles.fontAwesomeIcons2Overlay}>
          <Pressable
            style={styles.fontAwesomeIcons2Bg}
            onPress={closeFontAwesomeIcons2}
          />
          <Menu onClose={closeFontAwesomeIcons2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcons2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fontAwesomeIcons2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
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
  ellipseIcon: {
    position: "absolute",
    height: "14.58%",
    width: "31.54%",
    top: "10.58%",
    right: "34.35%",
    bottom: "74.84%",
    left: "34.11%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  icon: {
    height: "3.78%",
    width: "8.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fontAwesomeIcons2: {
    position: "absolute",
    left: "84.81%",
    top: "5.83%",
    right: "7.01%",
    bottom: "90.39%",
  },
  nameSurnameText: {
    position: "absolute",
    height: "4.32%",
    width: "46.03%",
    top: "26.67%",
    right: "27.1%",
    bottom: "69.01%",
    left: "26.87%",
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    position: "absolute",
    height: "2.59%",
    width: "29.67%",
    top: "30.99%",
    right: "35.05%",
    bottom: "66.41%",
    left: "35.28%",
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  companyDescriptionText: {
    position: "absolute",
    height: "1.89%",
    width: "62.45%",
    top: "16.97%",
    right: "18.77%",
    bottom: "81.15%",
    left: "18.77%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  companySizeText: {
    position: "absolute",
    height: "1.89%",
    width: "62.45%",
    top: "49.1%",
    right: "18.86%",
    bottom: "49.02%",
    left: "18.69%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  industryText: {
    position: "absolute",
    height: "1.89%",
    width: "62.45%",
    top: "59.94%",
    right: "18.86%",
    bottom: "38.18%",
    left: "18.69%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  analyticsText: {
    position: "absolute",
    height: "1.89%",
    width: "62.45%",
    top: "67.87%",
    right: "18.86%",
    bottom: "30.24%",
    left: "18.69%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  industryNameText: {
    position: "absolute",
    height: "1.89%",
    width: "62.45%",
    top: "62.92%",
    right: "18.86%",
    bottom: "35.19%",
    left: "18.69%",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  smallText: {
    position: "absolute",
    height: "1.89%",
    width: "31.07%",
    top: "52.87%",
    right: "31.31%",
    bottom: "45.25%",
    left: "37.62%",
    fontSize: 20,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  employeesText: {
    position: "absolute",
    height: "1.89%",
    width: "40.42%",
    top: "54.99%",
    right: "21.96%",
    bottom: "43.13%",
    left: "37.62%",
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  companyNameText: {
    position: "absolute",
    height: "1.89%",
    width: "49.53%",
    top: "4.87%",
    right: "8.88%",
    bottom: "93.24%",
    left: "41.59%",
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  taglineText: {
    position: "absolute",
    height: "1.89%",
    width: "54.91%",
    top: "7.86%",
    right: "3.5%",
    bottom: "90.26%",
    left: "41.59%",
    fontSize: 20,
    fontWeight: "100",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    height: "28.91%",
    width: "85.98%",
    top: "19.95%",
    right: "7.48%",
    bottom: "51.14%",
    left: "6.54%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  ellipseIcon1: {
    position: "absolute",
    height: "7.86%",
    width: "23.36%",
    top: "3.93%",
    right: "66.12%",
    bottom: "88.22%",
    left: "10.51%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  fontAwesomeIcons3: {
    position: "absolute",
    height: "3.93%",
    width: "13.32%",
    top: "52.79%",
    right: "70.09%",
    bottom: "43.28%",
    left: "16.59%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  jobListingsText: {
    position: "absolute",
    height: "2.75%",
    width: "24.07%",
    top: "73.37%",
    right: "65.42%",
    bottom: "23.88%",
    left: "10.51%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    height: "1.73%",
    width: "5.37%",
    top: "71.64%",
    right: "84.11%",
    bottom: "26.63%",
    left: "10.51%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  hiredText: {
    position: "absolute",
    height: "2.75%",
    width: "24.07%",
    top: "73.37%",
    right: "10.75%",
    bottom: "23.88%",
    left: "65.19%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  text1: {
    position: "absolute",
    height: "1.73%",
    width: "4.67%",
    top: "71.64%",
    right: "30.14%",
    bottom: "26.63%",
    left: "65.19%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  totalApplicantsText: {
    position: "absolute",
    height: "2.75%",
    width: "32.71%",
    top: "79.73%",
    right: "56.78%",
    bottom: "17.52%",
    left: "10.51%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  text2: {
    position: "absolute",
    height: "1.73%",
    width: "5.37%",
    top: "78%",
    right: "84.11%",
    bottom: "20.27%",
    left: "10.51%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 1273,
    overflow: "hidden",
  },
  companyDetailsView: {
    position: "absolute",
    height: "50.76%",
    width: "100%",
    top: "36.39%",
    right: "0%",
    bottom: "12.85%",
    left: "0%",
    backgroundColor: "#fff",
  },
  companyProfileView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default CompanyProfile;
