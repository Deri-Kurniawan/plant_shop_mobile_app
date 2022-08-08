import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailPlantScreen from "./screens/DetailPlantScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import FavoritePlantsScreen from "./screens/FavoritePlantsScreen";
import BasketPlantsScreen from "./screens/BasketPlantsScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    RobotoSlabBlack: require("./assets/fonts/RobotoSlab-Black.ttf"),
    RobotoSlabBold: require("./assets/fonts/RobotoSlab-Bold.ttf"),
    RobotoSlabExtraBold: require("./assets/fonts/RobotoSlab-ExtraBold.ttf"),
    RobotoSlabExtraLight: require("./assets/fonts/RobotoSlab-ExtraLight.ttf"),
    RobotoSlabLight: require("./assets/fonts/RobotoSlab-Light.ttf"),
    RobotoSlabMedium: require("./assets/fonts/RobotoSlab-Medium.ttf"),
    RobotoSlabRegular: require("./assets/fonts/RobotoSlab-Regular.ttf"),
    RobotoSlabSemiBold: require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
    RobotoSlabThin: require("./assets/fonts/RobotoSlab-Thin.ttf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailPlant" component={DetailPlantScreen} />
          <Stack.Screen
            name="FavoritePlants"
            component={FavoritePlantsScreen}
          />
          <Stack.Screen name="BasketPlants" component={BasketPlantsScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
