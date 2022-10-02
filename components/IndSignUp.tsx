import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IndSignUp from "../components/IndSignUp";
import LoginForm from "../components/LoginForm";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

type IndSignUpType = {
  style?: StyleProp<ViewStyle>;
};

const TopTab = createMaterialTopTabNavigator();

const IndSignUp = ({ style }: IndSignUpType) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.indSignUp, style, styles.topTabContent]}>
      <TopTab.Navigator style={styles.registerLoginTopTabs}>
        <TopTab.Screen
          name="Ind. Sign up"
          component={IndSignUp}
          options={{
            tabBarLabel: "Register",
          }}
        />
        <TopTab.Screen
          name="Login Form"
          component={LoginForm}
          options={{
            tabBarLabel: "Log In",
          }}
        />
      </TopTab.Navigator>
      <View style={styles.surnameView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.surnameText}>Surname</Text>
        <RNPTextInput
          style={styles.rectangleRNPTextInput}
          mode="outlined"
          outlineColor="rgba(255, 255, 255, 0.01)"
          activeOutlineColor="#fff"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={styles.emailView}>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <Text style={styles.emailAddressText}>Email Address</Text>
        <RNPTextInput
          style={styles.rectangleRNPTextInput1}
          mode="flat"
          underlineColor="#fff"
          activeUnderlineColor="#fff"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={styles.confirmView}>
        <View style={styles.rectangleView4} />
        <View style={styles.rectangleView5} />
        <Text style={styles.confirmPasswordText}>Confirm Password</Text>
        <RNPTextInput
          style={styles.rectangleRNPTextInput2}
          mode="outlined"
          outlineColor="rgba(255, 255, 255, 0.01)"
          activeOutlineColor="#fff"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={styles.passwordView}>
        <View style={styles.rectangleView6} />
        <View style={styles.rectangleView7} />
        <Text style={styles.passwordText}>Password</Text>
        <RNPTextInput
          style={styles.rectangleRNPTextInput3}
          mode="flat"
          underlineColor="#fff"
          activeUnderlineColor="#fff"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <View style={styles.phoneView}>
        <View style={styles.rectangleView8} />
        <View style={styles.rectangleView9} />
        <Text style={styles.phoneNumberText}>{`Phone Number `}</Text>
        <RNPTextInput
          style={styles.rectangleRNPTextInput4}
          mode="outlined"
          outlineColor="rgba(255, 255, 255, 0.01)"
          activeOutlineColor="#fff"
          theme={{ colors: { background: "#fff" } }}
        />
      </View>
      <Pressable
        style={styles.registerButtonPressable}
        onPress={() => navigation.navigate("GetStarted")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.registerText}>Register</Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("IndLandingPage")}
      >
        <View style={styles.rectangleView10} />
        <Text style={styles.text}>{`<`}</Text>
      </Pressable>
      <View style={styles.nameView}>
        <TextInput style={styles.rectangleTextInput} keyboardType="text" />
        <View style={styles.rectangleView11} />
        <RNPTextInput
          style={styles.rectangleRNPTextInput5}
          mode="outlined"
          outlineColor="rgba(255, 255, 255, 0.01)"
          activeOutlineColor="#fff"
          theme={{ colors: { background: "#fff" } }}
        />
        <Text style={styles.nameText}>Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topTabContent: {
    flex: 1,
  },
  registerLoginTopTabs: {
    width: "100%",
  },
  rectangleView: {
    position: "absolute",
    top: 14,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 370,
    height: 57,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 31,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 90,
    height: 25,
  },
  surnameText: {
    position: "absolute",
    top: 0,
    left: 38,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleRNPTextInput: {
    position: "absolute",
    top: 20,
    left: 17,
    width: 335,
    height: 29,
  },
  surnameView: {
    position: "absolute",
    top: 291,
    right: 10,
    width: 370,
    height: 71,
  },
  rectangleView2: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 370,
    height: 57,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 31,
    backgroundColor: "#fff",
    width: 130,
    height: 25,
  },
  emailAddressText: {
    position: "absolute",
    top: 0,
    left: 36,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleRNPTextInput1: {
    position: "absolute",
    top: 25,
    left: 17,
    backgroundColor: "#fff",
    width: 335,
    height: 29,
  },
  emailView: {
    position: "absolute",
    top: 373,
    right: 10,
    width: 370,
    height: 70,
  },
  rectangleView4: {
    position: "absolute",
    top: 14,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 370,
    height: 57,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 31,
    backgroundColor: "#fff",
    width: 170,
    height: 25,
  },
  confirmPasswordText: {
    position: "absolute",
    top: 0,
    left: 36,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleRNPTextInput2: {
    position: "absolute",
    top: 22,
    left: 17,
    width: 335,
    height: 29,
  },
  confirmView: {
    position: "absolute",
    top: 633,
    right: 10,
    width: 370,
    height: 71,
  },
  rectangleView6: {
    position: "absolute",
    top: 14,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 370,
    height: 57,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 31,
    backgroundColor: "#fff",
    width: 100,
    height: 25,
  },
  passwordText: {
    position: "absolute",
    top: 2,
    left: 38,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleRNPTextInput3: {
    position: "absolute",
    top: 25,
    left: 17,
    backgroundColor: "#fff",
    width: 335,
    height: 29,
  },
  passwordView: {
    position: "absolute",
    top: 546,
    right: 10,
    width: 370,
    height: 71,
  },
  rectangleView8: {
    position: "absolute",
    top: 14,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 370,
    height: 57,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 31,
    backgroundColor: "#fff",
    width: 140,
    height: 25,
  },
  phoneNumberText: {
    position: "absolute",
    top: 2,
    left: 38,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  rectangleRNPTextInput4: {
    position: "absolute",
    top: 20,
    left: 17,
    width: 335,
    height: 29,
  },
  phoneView: {
    position: "absolute",
    top: 459,
    right: 10,
    width: 370,
    height: 71,
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
  registerText: {
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
  registerButtonPressable: {
    position: "absolute",
    top: 807,
    left: 59,
    width: 273,
    height: 55,
  },
  rectangleView10: {
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
    right: 15,
    bottom: 3,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  backPressable: {
    position: "absolute",
    top: 33,
    left: 27,
    width: 42,
    height: 38,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 14,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 370,
    height: 57,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 66,
    height: 24,
  },
  rectangleRNPTextInput5: {
    position: "absolute",
    top: 20,
    left: 16.05,
    width: 327.04,
    height: 29,
  },
  nameText: {
    position: "absolute",
    top: 2,
    left: 36.55,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    top: 204,
    right: 10,
    width: 370,
    height: 71,
  },
  indSignUp: {
    flex: 1,
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});

export default IndSignUp;
