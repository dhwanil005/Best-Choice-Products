import React from "react";
import { Text, Image, StyleSheet, View, Linking } from "react-native";
import logo from "../assets/logo.png";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { Divider } from "react-native-elements";
export const profileScreen = ({ navigation }) => {
  const uri1 = logo;
  const [searchValue, onSearch] = React.useState("");
  return (
    <SafeAreaProvider forceInset={{ top: "always" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("homeScreen");
          }}
        >
          <Image
            source={uri1}
            style={{ height: 35, width: 35, marginLeft: 8 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="close-outline"
            size={24}
            color="black"
            style={{ marginRight: 8 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Search "
          style={{ width: "90%", paddingLeft: 10 }}
        />
        <Octicons
          name="search"
          size={16}
          color="#686868"
          style={{ paddingTop: 10, paddingRight: 8 }}
        />
      </View>
      <View
        style={{
          flex: 25,
          flexDirection: "column",
        }}
      >
        <View style={{ width: "85%", alignSelf: "center", paddingTop: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 15,
            }}
          >
            Account
          </Text>
          <Divider style={{ backgroundColor: "black" }} />
        </View>

        <View style={{ width: "85%", alignSelf: "center", paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text
              style={{
                fontSize: 18,
                paddingBottom: 15,
                fontWeight: "200",
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#636e72" }} />
        </View>
        <View style={{ width: "85%", alignSelf: "center", paddingTop: 20 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                paddingBottom: 15,
                fontWeight: "200",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#636e72" }} />
        </View>
        <View style={{ width: "85%", alignSelf: "center", paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://bestchoiceproducts.com/pages/rewards");
            }}
          >
            <Text
              style={{
                fontSize: 18,
                paddingBottom: 15,
                fontWeight: "200",
              }}
            >
              Rewards
            </Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#636e72" }} />
        </View>
        <View style={{ width: "85%", alignSelf: "center", paddingTop: 20 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                paddingBottom: 15,
                fontWeight: "200",
              }}
            >
              Track Order
            </Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#636e72" }} />
        </View>
        <View style={{ width: "85%", alignSelf: "center", paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://bestchoiceproducts.com/pages/help");
            }}
          >
            <Text
              style={{
                fontSize: 18,
                paddingBottom: 15,
                fontWeight: "200",
              }}
            >
              Help center
            </Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: "#636e72" }} />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 35,
    width: 35,
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
  },
  search: {
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    height: "4%",
  },
});
export default profileScreen;
