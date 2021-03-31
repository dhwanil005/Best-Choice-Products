import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Octicons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import NavHead from "../Parts/navHead";
import Empty from "../Parts/empty";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransactions } from "./store/actions/transactionAction";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import { ListItem } from "react-native-elements";
import img1 from "../assets/img1.jpeg";
import { useState } from "react";
import { Touchable } from "react-native";

function Item({ title, id, pid, price, image, quantity }) {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Image
          source={{ uri: image }}
          style={{ height: 90, width: 90, marginTop: 30 }}
          resizeMode="contain"
        />
        <Text
          style={{
            paddingTop: 40,
            paddingLeft: 25,
            fontSize: 17,
            fontWeight: "300",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity
          style={{ paddingTop: 40 }}
          onPress={() => {
            dispatch(deleteTransactions(id));
          }}
        >
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}></View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 25, paddingTop: 10, paddingLeft: 120 }}>
          Quantity:
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 25, paddingTop: 10 }}>
          {quantity}
        </Text>

        <Text style={{ fontSize: 25, paddingLeft: 20, paddingTop: 10 }}>
          ${price}
        </Text>
      </View>
    </View>
  );
}

export const AddtoCart = ({ navigation }) => {
  const { transactions } = useSelector((state) => state.transactions);
  const prices = transactions.map((transaction) => transaction.price);
  const total = prices.reduce((prev, cur) => (prev += cur), 0);

  return (
    <SafeAreaProvider
      forceInset={{ top: "always" }}
      style={{ backgroundColor: "white" }}
    >
      <NavHead navigation={navigation} />
      <View style={{ flex: 25 }}>
        <ScrollView>
          <Text style={{ fontSize: 22, paddingTop: 20, paddingLeft: 20 }}>
            Shopping Cart
          </Text>
          {transactions.length > 0 ? (
            <View>
              <FlatList
                data={transactions}
                renderItem={({ item }) => (
                  <Item
                    title={item.title}
                    price={item.price}
                    pid={item.pid}
                    id={item.id}
                    quantity={item.quantity}
                    image={item.image}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
              <View style={{ paddingTop: 30 }}>
                <Divider
                  style={{
                    backgroundColor: "#636e72",
                    width: "85%",
                    alignSelf: "center",
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
                  <Text style={{ fontSize: 18, fontWeight: "300" }}>
                    Shipping
                  </Text>
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
                  <Text style={{ fontSize: 18, fontWeight: "300" }}>
                    Subtotal
                  </Text>
                  <Text style={{ fontSize: 18 }}>${total}</Text>
                </View>
                <Divider
                  style={{
                    backgroundColor: "#636e72",
                    width: "85%",
                    alignSelf: "center",
                  }}
                />
              </View>
              <Text
                style={{
                  fontStyle: "italic",
                  fontWeight: "200",
                  alignSelf: "center",
                  paddingTop: 20,
                }}
              >
                Shipping & taxes calculated at checkout
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("checkout")}
                style={{
                  borderWidth: 1,
                  width: "85%",
                  alignItems: "center",
                  borderRadius: 9,
                  height: 44,
                  paddingTop: 10,
                  marginTop: 5,
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
                  CHECK OUT
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Empty />
          )}

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              borderWidth: 1,
              width: "85%",
              alignItems: "center",
              borderRadius: 9,
              height: 44,
              paddingTop: 10,
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
              CONTINUE TO SHOPPING
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};
export default AddtoCart;
