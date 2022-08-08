import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IoIcon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants";
import { CircleButton } from "./Button";

const NavButtonIcon = ({ onPressHandler, icon }) => (
  <TouchableOpacity onPress={onPressHandler}>
    <IoIcon
      size={24}
      name={icon}
      style={{
        padding: "5%",
      }}
    />
  </TouchableOpacity>
);

const Navbar = ({ navigation, favoritePlants }) => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        bottom: "1.8%",
        zIndex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: COLORS.gray,
          paddingVertical: "4%",
          borderRadius: 30,
          marginHorizontal: 10,
          alignItems: "center",
        }}
      >
        <NavButtonIcon
          icon="home-outline"
          onPressHandler={() => navigation.navigate("Home")}
        />
        <NavButtonIcon
          icon="heart-outline"
          onPressHandler={() =>
            navigation.navigate("FavoritePlants", {
              favoritePlants: favoritePlants,
            })
          }
        />
        <CircleButton
          title={<MIcon size={24} name="qr-code-scanner" />}
          backgroundColor={COLORS.secondary}
          color={COLORS.white}
          onPresshandler={() => navigation.navigate("QRScanner")}
          circleSize={50}
        />
        <NavButtonIcon
          icon="basket-outline"
          onPressHandler={() => navigation.navigate("BasketPlants")}
        />
        <NavButtonIcon
          icon="person-outline"
          onPressHandler={() => navigation.navigate("UserProfile")}
        />
      </View>
    </View>
  );
};

export default Navbar;
