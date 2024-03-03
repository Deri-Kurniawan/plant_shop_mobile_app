import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CircleButton } from "./Button";
import { COLORS, FONTS, SIZES } from "../constants";
import IoIcon from "react-native-vector-icons/Ionicons";

const HomePlantItem = ({ data, navigation, plantFavoriteHandle }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailPlant", {
          plant: data,
        })
      }
      activeOpacity={0.8}
      style={{
        width: 250,
        height: "72%",
        elevation: 5,
        marginRight: 20,
        borderRadius: 28,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          zIndex: -1,
          width: "100%",
          height: "100%",
          borderRadius: 28,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: "5%",
        }}
      >
        <TouchableOpacity
          style={{
            zIndex: 1,
            paddingHorizontal: "14%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 35,
            backgroundColor: COLORS.white,
            elevation: 1,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.xxlarge,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>

        <CircleButton
          title={
            <IoIcon size={34} name={favorited ? "heart" : "heart-outline"} />
          }
          backgroundColor={COLORS.black}
          color={COLORS.white}
          onPresshandler={() => {
            plantFavoriteHandle(data, true);
            setFavorited(!favorited);
          }}
        />
      </View>

      <Text
        style={{
          transform: [{ rotate: "-90deg" }],
          position: "absolute",
          left: "2%",
          top: "40%",
          fontFamily: FONTS.bold,
          fontSize: SIZES.xxxlarge * 1.3,
        }}
      >
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

const HomePlantList = ({
  data,
  navigation,
  favoritePlants,
  plantFavoriteHandle,
}) => {
  if (data.length === 0)
    return (
      <Text
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Data
      </Text>
    );

  return (
    <FlatList
      legacyImplementation={false}
      horizontal={true}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <HomePlantItem
          data={item}
          navigation={navigation}
          plantFavoriteHandle={plantFavoriteHandle}
          favoritePlants={favoritePlants}
        />
      )}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <View />}
      ListHeaderComponentStyle={{
        width: 20,
      }}
      ListFooterComponent={() => <View />}
      ListFooterComponentStyle={{
        width: 13,
      }}
    />
  );
};

export default HomePlantList;
