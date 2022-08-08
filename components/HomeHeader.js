import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EllipseVerticalButton } from "./Button";
import Icon from "react-native-vector-icons/Ionicons";

const HomeHeader = ({
  searchText,
  searchInputToggled,
  onChangeSearchText,
  onPressToggleSearchInput,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {!searchInputToggled ? (
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.xxxlarge * 1.3,
            width: "60%",
          }}
        >
          Find your favorite plants
        </Text>
      ) : (
        <View
          style={{
            backgroundColor: COLORS.gray,
            width: "80%",
            padding: SIZES.xlarge,
            borderRadius: SIZES.xlarge,
            margin: 0,
            borderWidth: 0.5,
          }}
        >
          <TextInput
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.xxxlarge,
              marginRight: "10%",
            }}
            keyboardType="default"
            value={searchText}
            placeholder="Find plants"
            onChangeText={onChangeSearchText}
            autoFocus={true}
          />
          {searchText !== "" && (
            <TouchableOpacity
              style={{
                position: "absolute",
                right: "5%",
                top: "50%",
              }}
              onPress={() => onChangeSearchText("")}
            >
              <Icon name="close" size={SIZES.xxxlarge} color={COLORS.black} />
            </TouchableOpacity>
          )}
        </View>
      )}

      <View style={{ width: "15%" }}>
        <EllipseVerticalButton
          title={
            <Icon
              size={34}
              color={COLORS.black}
              name={searchInputToggled ? "close" : "search"}
            />
          }
          onPresshandler={onPressToggleSearchInput}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
