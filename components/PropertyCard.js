import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  available,
}) => {
  const { width, height } = Dimensions.get("window");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 3, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>

            <Ionicons name="heart-outline" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6cb4ee",
                borderRadius: 5,
                paddingVertical: 3,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 200,
              marginTop: 6,
              color: "grey",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Precio por 1 noche y {adults} adultos
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {formatter.format(property.oldPrice * adults)}
            </Text>

            <Text style={{ fontSize: 18 }}>
              {formatter.format(property.newPrice * adults)}
            </Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "grey" }}>
              Habitacion de lujo
            </Text>
            <Text style={{ fontSize: 16, color: "grey" }}>
              Habitacion de hotel : 1 cama
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#6082b6",
              borderRadius: 5,
              paddingVertical: 2,
              width: 150,
              marginTop: 6,
              paddingHorizontal: 3,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Oferta por tiempo limitado
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
