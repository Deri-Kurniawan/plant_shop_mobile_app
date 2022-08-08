import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CircleButton, FocusedStatusBar, Navbar } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import IoIcon from "react-native-vector-icons/Ionicons";

const maxTextLength = 180;

const BoxPlantProps = ({ title, value }) => (
  <View>
    <Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        color: COLORS.grayText,
        lineHeight: SIZES.xlarge * 2,
      }}
    >
      {title}
    </Text>
    <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xxlarge }}>
      {value}
    </Text>
  </View>
);

const DetailPlantScreen = ({ route, navigation }) => {
  const { plant: plantParam } = route.params;
  const [plant, setPlant] = useState(plantParam);

  const [descriptionText, setDescriptionText] = useState(
    plant.description.slice(0, maxTextLength)
  );
  const [isReadmore, setIsReadmore] = useState(false);

  const getRatingAvg = (reviews) => {
    let average = 0;
    reviews = reviews.map((review) => (average = average + review.rating));
    return (average / reviews.length).toFixed(1);
  };

  useEffect(() => {
    if (isReadmore) {
      setDescriptionText(plant.description);
    } else {
      if (plant.description.length > maxTextLength) {
        setDescriptionText(plant.description.slice(0, maxTextLength));
      }
    }
  }, [isReadmore]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.secondary} />

      <View
        style={{
          zIndex: 1,
          backgroundColor: COLORS.white,
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "3%",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.xlarge,
              color: COLORS.grayText,
            }}
          >
            Price
          </Text>
          <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.xxxlarge }}>
            ${plant.price}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: COLORS.secondary,
            paddingHorizontal: "15%",
            paddingVertical: "5%",
            borderRadius: 35,
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.xxlarge,
              color: COLORS.white,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <CircleButton
          title={<IoIcon size={34} name="arrow-back-outline" />}
          backgroundColor={COLORS.white}
          circleSize={55}
          borderColor={COLORS.gray}
          borderWidth={SIZES.xsmall / 2}
          onPresshandler={() => navigation.goBack()}
        />
        <CircleButton
          title={<IoIcon size={34} name="heart-outline" />}
          backgroundColor={COLORS.white}
          circleSize={55}
          borderColor={COLORS.gray}
          borderWidth={SIZES.xsmall / 2}
        />
      </View>

      <Image style={{ width: "100%", height: 500 }} source={plant.image} />
      <View
        style={{
          paddingVertical: "2%",
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: "2%",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.extraBold,
              fontSize: SIZES.xxxlarge * 1.4,
            }}
          >
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoIcon
              style={{ marginRight: 5 }}
              color={COLORS.secondary}
              size={SIZES.xxlarge}
              name="star"
            />
            <Text style={{ marginRight: 5 }}>
              {getRatingAvg(plant.reviews)}
            </Text>
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.xlarge }}>
              ({plant.reviews.length}) Reviews
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ fontFamily: FONTS.regular }}>
            {descriptionText}
            {plant.description.length > maxTextLength && (
              <>
                {!isReadmore && "..."}
                <Text
                  style={{ fontFamily: FONTS.bold }}
                  onPress={() => setIsReadmore(!isReadmore)}
                >
                  {" "}
                  {isReadmore ? "Read Less" : "Read More"}
                </Text>
              </>
            )}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "3%",
          }}
        >
          <BoxPlantProps title="Size" value={plant.size} />
          <BoxPlantProps title="Plant" value={plant.plant} />
          <BoxPlantProps title="Height" value={plant.height} />
          <BoxPlantProps title="Humidity" value={plant.humidity} />
        </View>
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 0.5,
        }}
      >
        {plant.reviews.length < 1 ? (
          <Text>No Reviews</Text>
        ) : (
          <FlatList
            style={{
              paddingHorizontal: "5%",
              height: "10%",
            }}
            horizontal={false}
            scrollEnabled={true}
            data={plant.reviews}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginVertical: "2%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      fontSize: SIZES.xlarge,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text>
                    <IoIcon
                      style={{ marginRight: 5 }}
                      color={COLORS.secondary}
                      size={SIZES.large}
                      name="star"
                    />{" "}
                    {item.rating}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.large,
                    lineHeight: SIZES.xlarge * 1.5,
                  }}
                >
                  {item.comment}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailPlantScreen;
