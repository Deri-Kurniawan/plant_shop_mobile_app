import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

export const BannerPlantDiscount = ({
  title,
  description,
  image,
  onPressHandler,
  style,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressHandler}>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          paddingRight: "10%",
          paddingLeft: "10%",
          paddingTop: "5%",
          paddingBottom: "5%",
          borderRadius: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...style,
        }}
      >
        <View style={{ width: "70%" }}>
          <Text
            style={{
              fontFamily: FONTS.extraBold,
              fontSize: SIZES.xxxlarge,
              color: COLORS.white,
              marginBottom: "5%",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.xxlarge,
              color: COLORS.white,
            }}
          >
            {description}
          </Text>
        </View>
        <Image
          style={{ width: 70, height: 70, borderRadius: 35 }}
          source={image}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};
