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
  return (
    <SafeAreaProvider forceInset={{ top: "always" }}>
      <NavHead navigation={navigation} />
      <View style={{ flex: 25, paddingTop: 20, justifyContent: "center" }}>
        <ScrollView>
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
