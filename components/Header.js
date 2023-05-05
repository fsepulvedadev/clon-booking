import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 4,
      }}
    >
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 25,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="#fff" />
        <Text
          style={{
            color: "#fff",
            marginLeft: 6,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Estadias
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Ionicons name="airplane-outline" size={24} color="#fff" />
        <Text
          style={{
            color: "#fff",
            marginLeft: 6,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Vuelos
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MaterialIcons
          name="car-rental"
          size={26}
          color="#fff"
          style={{ marginBottom: 4 }}
        />

        <Text
          style={{
            color: "#fff",
            marginLeft: 6,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Autos
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MaterialIcons name="directions-car" size={24} color="#fff" />

        <Text
          style={{
            color: "#fff",
            marginLeft: 6,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
