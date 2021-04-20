import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import icons from "../assets/icons.png";
import logo from "../assets/logo.png";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const uri = icons;
const uri1 = logo;
const NavHead = ({ navigation }) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={{ paddingLeft: 10, paddingRight: 10 }}
      onPress={() => navigation.navigate("homeScreen")}
    >
      <Image source={uri1} style={styles.logo} />
    </TouchableOpacity>

    {
      //Navigation Button
    }

    <TouchableOpacity
      style={{ paddingRight: 10 }}
      onPress={() => {
        navigation.navigate("Navigation");
      }}
    >
      <Image source={uri} style={styles.nav} />
    </TouchableOpacity>

    {
      //Search button
    }
    <TouchableOpacity style={styles.search}>
      <Text
        style={{
          fontSize: 16,
          alignSelf: "center",
          paddingLeft: 5,
          color: "#686868",
        }}
      >
        Search
      </Text>
      <Octicons
        name="search"
        size={16}
        color="#686868"
        style={{ paddingTop: 8, paddingRight: 8 }}
      />
    </TouchableOpacity>
    {
      //profile and cart buttons
    }
    <TouchableOpacity
      style={{ paddingLeft: 10 }}
      onPress={() => {
        navigation.navigate("Profile");
      }}
    >
      <Ionicons
        name="person-outline"
        size={27}
        color="black"
        style={{ paddingTop: 3 }}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ paddingLeft: 10, paddingRight: 10 }}
      onPress={() => {
        navigation.navigate("addtocart");
      }}
    >
      <Ionicons
        name="cart-outline"
        size={27}
        color="black"
        style={{ paddingTop: 3 }}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: 50,
  },
  logo: {
    height: 35,
    width: 35,
  },
  nav: {
    height: 35,
    width: 35,
  },
  search: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 200,
    height: 35,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginTop: 3,
  },
});

export default NavHead;
