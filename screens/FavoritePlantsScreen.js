import { View, Text, FlatList } from "react-native";
import React from "react";

const FavoritePlantsScreen = ({ route }) => {
  const { favoritePlants } = route.params;

  return (
    <View>
      <Text>FavoritePlantsScreen</Text>
      <FlatList
        data={favoritePlants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 50 }}> - {item.name}</Text>
        )}
      />
    </View>
  );
};

export default FavoritePlantsScreen;
