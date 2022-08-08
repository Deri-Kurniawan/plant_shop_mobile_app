import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { CircleButton, FocusedStatusBar, Navbar } from "../components";
import { COLORS, FONTS, IMAGES, SHADOWS, SIZES } from "../constants";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.gray} />

      <View style={{ zIndex: -1 }}>
        <Image
          style={{ width: "108%", height: "100%", resizeMode: "contain" }}
          source={IMAGES.welcomeBackground}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          top: "8%",
          left: "5%",
          ...SHADOWS.medium,
        }}
      >
        <Text
          style={{
            transform: [{ rotate: "-90deg" }],
            fontFamily: FONTS.medium,
            fontSize: SIZES.xxlarge,
            borderBottomColor: COLORS.black,
            borderBottomWidth: 2,
            marginBottom: 0,
            paddingBottom: SIZES.xlarge,
            paddingRight: SIZES.xlarge,
            paddingLeft: SIZES.xlarge,
          }}
        >
          Derizer.Shop
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.xxxlarge * 2,
            width: 140,
          }}
        >
          Plant a tree for life
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.black,
            marginBottom: "5%",
            fontFamily: FONTS.black,
            fontSize: SIZES.xxxlarge,
            width: "60%",
            textAlign: "center",
          }}
        >
          Worldwide delivery within 10-15 days
        </Text>

        <CircleButton
          title="GO"
          backgroundColor={COLORS.secondary}
          color={COLORS.white}
          onPresshandler={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
