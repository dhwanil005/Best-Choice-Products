import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export const Empty = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 30 }}>
      <Text style={{ color: "#ff4500", fontWeight: "700", fontSize: 20 }}>
        Cart is empty
      </Text>
    </View>
  );
};
export default Empty;
