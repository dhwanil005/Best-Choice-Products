import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import { LogBox } from "react-native";
import HTML from "react-native-render-html";
import icons from "../assets/icons.png";
import logo from "../assets/logo.png";
import offer1 from "../assets/offer1.jpeg";
import offer from "../assets/offer.jpeg";
import categorical1 from "../assets/categorical1.jpeg";
import categorical2 from "../assets/categorical2.jpeg";
import categorical3 from "../assets/categorical3.jpeg";
import categorical4 from "../assets/categorical4.jpeg";

import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NavHead from "../Parts/navHead";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import { ReactLiquid } from "react-liquid";
export const homeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [ids, setIds] = useState([]);
  let arrArr = [];
  let fid = "";
  useEffect(() => {
    async function GetProducts() {
      setLoading(true);
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
      const response = await fetch(
        "https://0c65ab25784357a1fd65b1762e1daef3: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@bestchoiceproducts.myshopify.com/admin/api/2021-01/collections/168914190414/products.json?fields=id"
      );
      const json = await response.json();
      if (ids.length == 0) {
        setIds(json.products);
      }

      arrArr = ids.map((x) => Object.values(x));
      fid = arrArr.toString();

      const response2 = await fetch("https://0c65ab25784357a1fd65b1762e1daef3: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@bestchoiceproducts.myshopify.com/admin/api/2021-01/products.json?ids=" + fid);
      const json2 = await response2.json();
      setData(json2.products);
    }
    GetProducts();
    setLoading(false);
  }, [ids]);
  const offerURI = offer;
  const offerURI1 = offer1;
  const cat1 = categorical1;
  const cat2 = categorical2;
  const cat3 = categorical3;
  const cat4 = categorical4;

  return (
    <SafeAreaProvider forceInset={{ top: "always" }} style={{ backgroundColor: "white" }}>
      <NavHead navigation={navigation} />

      <View style={{ flex: 25, paddingTop: 20, justifyContent: "center" }}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("listings", {
                  id: "162327134286",
                  title: "Mother's Day Gifts",
                })
              }
            >
              <Image source={offerURI} style={styles.offer} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("listings", {
                  id: "434899790",
                  title: "Patio Furniture",
                })
              }
            >
              <Image source={offerURI1} style={styles.offer} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("listings", {
                  id: "435127502",
                  title: "Zero gravity chairs",
                })
              }
              style={{ paddingTop: 10 }}
            >
              <Image source={cat1} style={styles.categorical} />
              <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "300" }}>Zero Gravity Chairs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onPress={() =>
                navigation.navigate("listings", {
                  id: "167758954574",
                  title: "Hammocks",
                })
              }
            >
              <Image source={cat2} style={styles.categorical} />
              <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "300" }}>Hammocks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onPress={() =>
                navigation.navigate("listings", {
                  id: "14051246104",
                  title: "Patio Umbrellas & Stands",
                })
              }
            >
              <Image source={cat3} style={styles.categorical} />
              <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "300" }}>Patio Umbrellas & Stands</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onPress={() =>
                navigation.navigate("listings", {
                  id: " 244416905402",
                  title: "Gardening Favourites",
                })
              }
            >
              <Image
                source={cat4}
                style={{
                  width: "90%",
                  alignSelf: "center",

                  height: 350,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", paddingTop: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Shop Best Sellers</Text>
          </View>

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: "50%",
                    padding: 10,
                    justifyContent: "center",
                  }}
                  onPress={() =>
                    navigation.navigate("product", {
                      pid: item.id,
                      title: item.title,
                      price: item.variants[0].price,
                      images: JSON.stringify(item.images),
                      image: item.image.src,
                      details: item.body_html,
                    })
                  }
                >
                  <Image
                    source={{ uri: item.image.src }}
                    style={{
                      height: 200,
                      width: "90%",
                      alignSelf: "center",
                    }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontSize: 20, fontWeight: "100" }}>{item.title}</Text>
                  <Text style={{ fontSize: 25, color: "red" }}>${item.variants[0].price}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  offer: {
    width: "100%",
    height: 320,
    marginBottom: 20,
  },
  categorical: {
    width: "90%",
    alignSelf: "center",

    height: 250,
  },
});

export default homeScreen;
