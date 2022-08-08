import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import {
  BannerPlantDiscount,
  FocusedStatusBar,
  HomeCategoryList,
  HomeHeader,
  Navbar,
} from "../components";
import { COLORS, CATEGORIES, PLANTS } from "../constants";
import HomePlantList from "../components/HomePlantList";

const HomeScreen = ({ navigation }) => {
  const [categoryActive, setCategoryActive] = useState(1);
  const [categories, setCategories] = useState(CATEGORIES);
  const [plants, setPlants] = useState(PLANTS);
  const [searchText, setSearchText] = useState("");
  const [searchInputToggled, setSearchInputToggled] = useState(false);

  const [favoritePlants, setFavoritePlants] = useState([]);

  const plantFavoriteHandle = (plant, favorited = true) => {
    if (favorited && !favoritePlants.includes(plant)) {
      setFavoritePlants([...favoritePlants, plant]);
    } else {
      setFavoritePlants(favoritePlants.filter((p) => p.id !== plant.id));
    }

    if (!favorited) {
      setFavoritePlants(favoritePlants.filter((p) => p.id !== plant.id));
    }
  };

  const onSelectedCategory = (id) => {
    if (id !== 1) {
      if (!searchText || searchText === "") {
        setPlants(PLANTS.filter((plant) => plant.category.id == id));
      } else {
        setPlants(
          PLANTS.filter(
            (plant) =>
              plant.category.id == id &&
              plant.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }
    } else {
      if (!searchText || searchText === "") {
        setPlants(PLANTS);
      } else {
        setPlants(
          PLANTS.filter((plant) =>
            plant.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }
    }

    setCategoryActive(id);
  };

  const onSearchInputToggled = () => setSearchInputToggled(!searchInputToggled);

  const onChangeSearchText = (text) => {
    setSearchText(text);
    setPlants(
      PLANTS.filter((plant) =>
        plant.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.secondary} />

      <Navbar navigation={navigation} favoritePlants={favoritePlants} />

      <View
        style={{
          paddingTop: "10%",
          paddingBottom: "5%",
        }}
      >
        <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <FocusedStatusBar backgroundColor={COLORS.secondary} />

          <HomeHeader
            searchText={searchText}
            searchInputToggled={searchInputToggled}
            onChangeSearchText={onChangeSearchText}
            onPressToggleSearchInput={onSearchInputToggled}
          />

          <BannerPlantDiscount
            style={{ marginTop: "5%", marginBottom: "5%" }}
            title="50% OFF"
            description="02 - 23 August 2022"
            image={plants[0]?.image}
            onPressHandler={() =>
              navigation.navigate("DetailPlant", {
                plant: plants[0],
              })
            }
          />
        </View>

        <HomeCategoryList
          data={categories}
          categoryActive={categoryActive}
          onSelectedCategory={onSelectedCategory}
        />
      </View>

      <HomePlantList
        data={plants}
        navigation={navigation}
        plantFavoriteHandle={plantFavoriteHandle}
        favoritePlants={favoritePlants}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
