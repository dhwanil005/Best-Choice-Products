import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Divider } from "react-native-elements";
import icons from "../assets/icons.png";
import logo from "../assets/logo.png";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NavHead from "../Parts/navHead";
import { Settings } from "react-native-fbsdk-next";
import { LoginButton, AccessToken } from "react-native-fbsdk-next";

import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
export const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaProvider forceInset={{ top: "always" }}>
      <NavHead navigation={navigation} />
      <View style={{ flex: 25, paddingTop: 20, flexDirection: "column" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", paddingLeft: 10 }}>
          Account
        </Text>
        <Text
          style={{
            fontSize: 24,
            paddingTop: 20,
            paddingLeft: 10,
            fontWeight: "300",
          }}
        >
          Sign in
        </Text>
        <Text
          style={{
            fontSize: 15,
            paddingTop: 10,
            paddingLeft: 10,
            fontWeight: "100",
          }}
        >
          To view your account, BCP Reward Points, and Favourites.
        </Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <TextInput
            style={{
              borderWidth: 0.5,
              width: "95%",
              alignSelf: "center",
              borderRadius: 7,
              height: 50,
              fontSize: 18,
              paddingLeft: 10,
              fontWeight: "500",
            }}
            placeholder="Email"
          />
        </View>
        <TextInput
          style={{
            borderWidth: 0.5,
            width: "95%",
            alignSelf: "center",
            borderRadius: 7,
            height: 50,
            fontSize: 18,
            paddingLeft: 10,
            fontWeight: "500",
          }}
          placeholder="Password"
          secureTextEntry="True"
        />

        <TouchableOpacity
          onPress={() => onSubmit()}
          style={{
            borderWidth: 1,
            width: "80%",
            alignItems: "center",
            borderRadius: 9,
            height: 44,
            padding: 10,
            marginTop: 25,
            backgroundColor: "black",

            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: "#636e72",
            width: "90%",
            alignSelf: "center",
            marginTop: 25,
          }}
        />
        <LoginButton
          style={{ marginTop: 40 }}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
