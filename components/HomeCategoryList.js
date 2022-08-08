import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const HomeCategoryItem = ({ data, categoryActive, onSelectedCategory }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => {
        onSelectedCategory(data.id);
      }}
      disabled={categoryActive === data.id}
    >
      <View
        style={{
          borderColor:
            categoryActive === data.id ? COLORS.secondary : COLORS.gray,
          borderWidth: 2.5,
          borderRadius: 35,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            color: COLORS.black,
            fontFamily: categoryActive === data.id ? FONTS.bold : FONTS.regular,
            fontSize: SIZES.xlarge,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeCategoryList = ({ data, categoryActive, onSelectedCategory }) => {
  return (
    <FlatList
      legacyImplementation="true"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={true}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <HomeCategoryItem
          data={item}
          categoryActive={categoryActive}
          onSelectedCategory={onSelectedCategory}
        />
      )}
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

export default HomeCategoryList;
