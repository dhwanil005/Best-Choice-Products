import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, View, Linking } from "react-native";
import logo from "../assets/logo.png";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";

export const navigationScreen = ({ navigation }) => {
  const uri1 = logo;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://a6145bf28673b70ed8907bc2a317b73e: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@bestchoicep.myshopify.com/admin/api/2021-01/collects.json")
      .then((response) => response.json())
      .then((json) => setData(json.collects))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const [searchValue, onSearch] = React.useState("");
  return (
    <SafeAreaProvider forceInset={{ top: "always" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("homeScreen");
          }}
        >
          <Image source={uri1} style={{ height: 35, width: 35, marginLeft: 8 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="close-outline" size={24} color="black" style={{ marginRight: 8 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Search " style={{ width: "90%", paddingLeft: 10 }} />
        <Octicons name="search" size={16} color="#686868" style={{ paddingTop: 10, paddingRight: 8 }} />
      </View>
      <View style={{ flex: 25 }}>
        <ScrollView>
          <Text style={{ fontSize: 20, paddingTop: 15, paddingBottom: 10, paddingLeft: 20, fontWeight: "bold" }}>Shop by Department</Text>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "8484519960",
                title: "Patio & Garden",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Patio & Garden</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "9600598040",
                title: "Home",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Home</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "9683435544",
                title: "Toys & Games",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Toys & Games</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "9641951256",
                title: "Musical Instruments",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Musical Instruments</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "10965909528",
                title: "Pet Supplies",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Pet Supplies</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "9640968216",
                title: "Fitness",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Fitness</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "11839242264",
                title: "Seasonal Decor",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Seasonal Decor</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "151439769678",
                title: "Gifts",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Gifts</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "143092645966",
                title: "New Arrivals",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>New Arrivals</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("listings", {
                id: "140895420494",
                title: "Clearance",
              })
            }
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>Clearance</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://bestchoiceproducts.com/pages/about-us-best-choice-products");
            }}
          >
            <Text style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingLeft: 25 }}>About BCP</Text>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </ScrollView>
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
export default navigationScreen;
