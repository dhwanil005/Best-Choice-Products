import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import icons from "../assets/icons.png";
import logo from "../assets/logo.png";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import img1 from "../assets/img1.jpeg";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
const uri = icons;
const uri1 = logo;
import { FlatList } from "react-native-gesture-handler";
function Item({ title, id, pid, price, image, quantity }) {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        <Image source={{ uri: image }} style={{ height: 90, width: 90, marginTop: 30, marginLeft: 25 }} resizeMode="contain" />
        <Text
          style={{
            paddingTop: 30,
            fontSize: 20,
            flexShrink: 1,
          }}
        >
          {title}
        </Text>

        <Text style={{ fontSize: 20, paddingTop: 30, paddingRight: 10 }}>${price}</Text>
      </View>
      <Divider
        style={{
          backgroundColor: "#636e72",
          width: "85%",
          alignSelf: "center",
          marginTop: 30,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%",
          alignSelf: "center",
          paddingTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "300" }}>Shipping</Text>
        <Text style={{ fontSize: 18 }}>Free</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%",
          alignSelf: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "300" }}>Subtotal</Text>
        <Text style={{ fontSize: 18 }}>${price}</Text>
      </View>
      <Divider
        style={{
          backgroundColor: "#636e72",
          width: "85%",
          alignSelf: "center",
          marginTop: 10,
        }}
      />
    </View>
  );
}
function Checkout({ navigation }) {
  const { transactions } = useSelector((state) => state.transactions);
  const prices = transactions.map((transaction) => transaction.price);
  const total = prices.reduce((prev, cur) => (prev += cur), 0);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.header}>
        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }} onPress={() => navigation.navigate("homeScreen")}>
          <Image source={uri1} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ paddingTop: 20 }}>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "100%",
              alignSelf: "center",
            }}
          />
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Ionicons name="cart-outline" size={27} color="black" style={{ paddingTop: 3, paddingLeft: 10 }} />
            <Text style={{ fontSize: 21, paddingTop: 3, paddingLeft: 20 }}>Order summary</Text>
          </View>
          <Divider
            style={{
              backgroundColor: "#636e72",
              width: "100%",
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </View>
        <FlatList
          data={transactions}
          renderItem={({ item }) => <Item title={item.title} price={item.price} pid={item.pid} id={item.id} quantity={item.quantity} image={item.image} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  logo: {
    height: 35,
    width: 35,
  },
});

export default Checkout;
