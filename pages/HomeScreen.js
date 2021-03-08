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
import offer1 from "../assets/offer1.jpeg";
import categorical from "../assets/categorical.jpeg";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NavHead from "../Parts/navHead";
import { FlatList, ScrollView } from "react-native-gesture-handler";
export const homeScreen = ({ navigation }) => {
  const offerURI1 = offer1;
  const cat1 = categorical;
  const cat2 = categorical;
  const cat3 = categorical;
  const cat4 = categorical;
  const cat5 = categorical;
  const items = [
    {
      id: "001",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "002",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "003",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "004",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "005",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "006",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "007",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "008",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "009",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0010",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0011",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0012",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0013",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0014",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0015",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0016",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0017",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0018",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0019",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
    {
      id: "0020",
      image: require("../assets/p1.jpeg"),
      name: "patio pots",
    },
  ];
  return (
    <SafeAreaProvider forceInset={{ top: "always" }} style={{}}>
      <NavHead navigation={navigation} />
      <View style={{ flex: 25, paddingTop: 20, justifyContent: "center" }}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Image source={offerURI1} style={styles.offer} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 10 }}>
              <Image source={cat1} style={styles.categorical} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 10 }}>
              <Image source={cat2} style={styles.categorical} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 10 }}>
              <Image source={cat3} style={styles.categorical} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 10 }}>
              <Image source={cat4} style={styles.categorical} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: 10 }}>
              <Image source={cat5} style={styles.categorical} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Shop Best Sellers
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  width: "50%",
                  padding: 10,

                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{ height: 300, width: "100%", alignSelf: "center" }}
                  resizeMode="contain"
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  offer: {
    width: "100%",
    height: 320,
  },
  categorical: {
    width: "90%",
    alignSelf: "center",

    height: 250,
  },
});

export default homeScreen;
