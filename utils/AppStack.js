import React from "react";
import { useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import InitialLandingPage from "../screens/InitialLandingPage";
import ViewListing from "../screens/ViewListing";
import CompanyProfile from "../screens/CompanyProfile";
import ClientSettings from "../screens/ClientSettings";
import Listings from "../screens/Listings";
import ProfileDetails from "../screens/ProfileDetails";
import CompanyDetails from "../screens/CompanyDetails";
import BusSignUp from "../screens/BusSignUp";
import Profile from "../screens/Profile";
import EmployPeople from "../screens/EmployPeople";
import PasswordResetForm from "../screens/PasswordResetForm";
import BusLoginForm from "../screens/BusLoginForm";
import ClientLandingPage from "../screens/ClientLandingPage";
import FrameScreen from "../components/Frame5";
import ProfileEdit from "../screens/ProfileEdit";
import ChangePassword from "../screens/ChangePassword";
import IndividualSettings from "../screens/IndividualSettings";
import Profile1 from "../screens/Profile1";
import BankingDetails from "../screens/BankingDetails";
import CardDetailsAdded from "../screens/CardDetailsAdded";
import BankingDetails1 from "../screens/BankingDetails1";
import GetPaid from "../screens/GetPaid";
import AddEducation from "../screens/AddEducation";
import Education from "../screens/Education";
import AddExperience from "../screens/AddExperience";
import WorkExperience from "../screens/WorkExperience";
import Rate from "../screens/Rate";
import Services from "../screens/Services";
import Bio from "../screens/Bio";
import Skills from "../screens/Skills";
import Languages from "../screens/Languages";
import WorkHistory from "../screens/WorkHistory";
import Education1 from "../screens/Education1";
import JobTitle from "../screens/JobTitle";
import GetStarted from "../screens/GetStarted";
import Apply from "../screens/Apply";
import SearchEntry from "../screens/SearchEntry";
import SearchResults from "../screens/SearchResults";
import JobDescription from "../screens/JobDescription";
import PasswordResetForm1 from "../screens/PasswordResetForm1";
import IndLandingPage from "../screens/IndLandingPage";
import Hired from "../screens/Hired";
import JobDes from "../screens/JobDes";
import JobHeadline from "../screens/JobHeadline";
import Budget from "../screens/Budget";
import Budget1 from "../screens/Budget1";
import Skills1 from "../screens/Skills1";


const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const SplashScreen = () => <View />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="InitialLandingPage"
              component={InitialLandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewListing"
              component={ViewListing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CompanyProfile"
              component={CompanyProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClientSettings"
              component={ClientSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Listings"
              component={Listings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileDetails"
              component={ProfileDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CompanyDetails"
              component={CompanyDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusSignUp"
              component={BusSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmployPeople"
              component={EmployPeople}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordResetForm"
              component={PasswordResetForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusLoginForm"
              component={BusLoginForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClientLandingPage"
              component={ClientLandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IndividualSettings"
              component={IndividualSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankingDetails"
              component={BankingDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardDetailsAdded"
              component={CardDetailsAdded}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankingDetails1"
              component={BankingDetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetPaid"
              component={GetPaid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddEducation"
              component={AddEducation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Education"
              component={Education}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddExperience"
              component={AddExperience}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorkExperience"
              component={WorkExperience}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rate"
              component={Rate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Services"
              component={Services}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bio"
              component={Bio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Skills"
              component={Skills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Languages"
              component={Languages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorkHistory"
              component={WorkHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Education1"
              component={Education1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JobTitle"
              component={JobTitle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Apply"
              component={Apply}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchEntry"
              component={SearchEntry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JobDescription"
              component={JobDescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordResetForm1"
              component={PasswordResetForm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IndLandingPage"
              component={IndLandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hired"
              component={Hired}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JobDes"
              component={JobDes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JobHeadline"
              component={JobHeadline}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Budget"
              component={Budget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Budget1"
              component={Budget1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Skills1"
              component={Skills1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
    </NavigationContainer>
  )
};
export default AppStack;
