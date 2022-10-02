import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

type ApplicantProfileType = {
  onClose?: () => void;
};

const ApplicantProfile = ({ onClose }: ApplicantProfileType) => {
  return (
    <View style={styles.applicantProfileView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Text style={styles.johnDoeText}>John Doe</Text>
      <Text style={styles.qualificationTitleText}>Qualification/Title</Text>
      <Text style={styles.rateR400hrText}>Rate: R400/hr</Text>
      <View style={styles.frameView1}>
        <View style={styles.frameView}>
          <View style={styles.groupView1}>
            <Text style={styles.workExperienceText}>Work Experience</Text>
            <Text style={styles.biographyText}>Biography</Text>
            <Text style={styles.companyNameTitle20222022}>
              <Text style={styles.companyNameText1}>
                <Text style={styles.companyNameText}>Company name</Text>
              </Text>
              <Text style={styles.titleText1}>
                <Text style={styles.titleText}>Title</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.text}>2022-2022</Text>
              </Text>
            </Text>
            <View style={styles.groupView}>
              <Text style={styles.languagesText}>Languages</Text>
              <Text style={styles.languageProfiencyLanguage}>
                <Text style={styles.languageProfiencyText}>
                  <Text style={styles.languageText}>{`Language: `}</Text>
                  <Text style={styles.profiencyText}>Profiency</Text>
                </Text>
                <Text style={styles.languageProfiencyText1}>
                  <Text style={styles.languageText1}>{`Language: `}</Text>
                  <Text style={styles.profiencyText1}>Profiency</Text>
                </Text>
                <Text style={styles.languageProfiencyText2}>
                  <Text style={styles.languageText2}>{`Language: `}</Text>
                  <Text style={styles.profiencyText2}>Profiency</Text>
                </Text>
              </Text>
            </View>
            <Text style={styles.educationHistoryText}>Education history</Text>
            <Text style={styles.belgiumCampusITversityBache}>
              <Text style={styles.belgiumCampusITversity1}>
                <Text style={styles.belgiumCampusITversity}>
                  Belgium Campus ITversity
                </Text>
              </Text>
              <Text style={styles.bachelorOfComputingSE}>
                <Text style={styles.bachelorOfComputing}>
                  Bachelor of Computing: SE
                </Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text2}>2022-2022</Text>
              </Text>
            </Text>
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
          </View>
          <View style={styles.skillsView}>
            <View style={styles.jobComponentView}>
              <View style={styles.rectangleView} />
              <Text style={styles.skillText}>Skill</Text>
            </View>
            <View style={styles.jobComponentView1}>
              <View style={styles.rectangleView1} />
              <Text style={styles.skillText1}>Skill</Text>
            </View>
            <View style={styles.jobComponentView2}>
              <View style={styles.rectangleView2} />
              <Text style={styles.skillText2}>Skill</Text>
            </View>
            <View style={styles.jobComponentView3}>
              <View style={styles.rectangleView3} />
              <Text style={styles.skillText3}>Skill</Text>
            </View>
            <Text style={styles.skillsText}>Skills</Text>
          </View>
          <View style={styles.signUpView}>
            <View style={styles.searchBarView} />
            <Text style={styles.hireText}>Hire</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    height: "19.01%",
    width: "31.54%",
    top: "4.23%",
    right: "34.35%",
    bottom: "76.76%",
    left: "34.11%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  johnDoeText: {
    position: "absolute",
    height: "5.63%",
    width: "46.03%",
    top: "24.93%",
    right: "27.1%",
    bottom: "69.44%",
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
  qualificationTitleText: {
    position: "absolute",
    height: "3.38%",
    width: "46.73%",
    top: "30.56%",
    right: "26.64%",
    bottom: "66.06%",
    left: "26.64%",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  rateR400hrText: {
    position: "absolute",
    height: "3.1%",
    width: "27.57%",
    top: "33.94%",
    right: "35.98%",
    bottom: "62.96%",
    left: "36.45%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
  },
  workExperienceText: {
    position: "absolute",
    top: 387,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  biographyText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  companyNameText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  companyNameText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  titleText: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  titleText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  text1: {
    margin: 0,
  },
  companyNameTitle20222022: {
    position: "absolute",
    top: 416,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 69,
  },
  languagesText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  languageText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  profiencyText: {
    fontFamily: "Inter",
  },
  languageProfiencyText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  languageText1: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  profiencyText1: {
    fontFamily: "Inter",
  },
  languageProfiencyText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  languageText2: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  profiencyText2: {
    fontFamily: "Inter",
  },
  languageProfiencyText2: {
    margin: 0,
  },
  languageProfiencyLanguage: {
    position: "absolute",
    top: 29,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 69,
  },
  groupView: {
    position: "absolute",
    top: 765,
    left: 0,
    width: 263,
    height: 98,
  },
  educationHistoryText: {
    position: "absolute",
    top: 499,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  belgiumCampusITversity: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  belgiumCampusITversity1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bachelorOfComputing: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  bachelorOfComputingSE: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  text3: {
    margin: 0,
  },
  belgiumCampusITversityBache: {
    position: "absolute",
    top: 528,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 58,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 32,
    left: 0,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 364,
    height: 345,
  },
  groupView1: {
    position: "absolute",
    top: 27,
    left: 32,
    width: 364,
    height: 863,
  },
  rectangleView: {
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
  skillText: {
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
  jobComponentView: {
    position: "absolute",
    height: "29.61%",
    width: "44.41%",
    top: "24.71%",
    right: "0%",
    bottom: "45.68%",
    left: "55.59%",
  },
  rectangleView1: {
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
  skillText1: {
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
  jobComponentView1: {
    position: "absolute",
    height: "29.61%",
    width: "44.41%",
    top: "68.94%",
    right: "54.68%",
    bottom: "1.44%",
    left: "0.91%",
  },
  rectangleView2: {
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
  skillText2: {
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
  jobComponentView2: {
    position: "absolute",
    height: "27.76%",
    width: "44.41%",
    top: "24.54%",
    right: "55.59%",
    bottom: "47.7%",
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
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  skillText3: {
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
    height: "29.61%",
    width: "44.41%",
    top: "70.39%",
    right: "0%",
    bottom: "0%",
    left: "55.59%",
  },
  skillsText: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 48,
    height: 23.47,
  },
  skillsView: {
    position: "absolute",
    height: "12.03%",
    width: "77.34%",
    top: "50.94%",
    right: "15.19%",
    bottom: "37.04%",
    left: "7.48%",
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
  hireText: {
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
  signUpView: {
    position: "absolute",
    top: 1076,
    left: 77,
    width: 273,
    height: 55,
  },
  frameView: {
    position: "absolute",
    top: 13,
    left: 0,
    width: 428,
    height: 1229,
    overflow: "hidden",
  },
  frameView1: {
    position: "absolute",
    height: "58.73%",
    width: "100%",
    top: "33.94%",
    right: "0%",
    bottom: "7.32%",
    left: "0%",
    backgroundColor: "#fff",
  },
  applicantProfileView: {
    position: "relative",
    backgroundColor: "#fff",
    width: 428,
    height: 766,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default ApplicantProfile;
