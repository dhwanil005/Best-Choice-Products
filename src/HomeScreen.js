import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
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
import StarRating from "react-native-star-rating";

export const homeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://a6145bf28673b70ed8907bc2a317b73e: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@bestchoicep.myshopify.com/admin/api/2021-01/products.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const offerURI1 = offer1;
  const cat1 = categorical;
  const cat2 = categorical;
  const cat3 = categorical;
  const cat4 = categorical;
  const cat5 = categorical;

  return (
    <SafeAreaProvider
      forceInset={{ top: "always" }}
      style={{ backgroundColor: "white" }}
    >
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
                  <Text style={{ fontSize: 20, fontWeight: "100" }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 25, color: "red" }}>
                    ${item.variants[0].price}
                  </Text>
                  <View style={{ width: "100%", flexDirection: "row" }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={2.4}
                      starSize={20}
                      emptyStarColor={"#f1c40f"}
                      starStyle={{ padding: 0 }}
                      fullStarColor={"#f1c40f"}
                    />
                    <Text style={{ fontWeight: "100", paddingLeft: 10 }}>
                      (385)
                    </Text>
                  </View>
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
  },
  categorical: {
    width: "90%",
    alignSelf: "center",

    height: 250,
  },
});

export default homeScreen;
