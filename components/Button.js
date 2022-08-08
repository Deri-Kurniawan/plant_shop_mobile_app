import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export const CircleButton = ({
  title,
  backgroundColor,
  color,
  onPresshandler,
  circleSize = 70,
  borderColor = null,
  borderWidth = 0,
  activeOpacity = 0.5,
}) => (
  <TouchableOpacity activeOpacity={activeOpacity} onPress={onPresshandler}>
    <View
      style={{
        backgroundColor: !backgroundColor ? COLORS.white : backgroundColor,
        width: circleSize,
        height: circleSize,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        borderColor,
        borderWidth,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.xxxlarge,
          borderRadius: 50,
          color: !color ? COLORS.black : color,
        }}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

export const EllipseVerticalButton = ({ title, onPresshandler }) => (
  <TouchableOpacity onPress={onPresshandler}>
    <View
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray,
        borderWidth: 4,
        width: 55,
        height: 70,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: COLORS.black }}>{title}</Text>
    </View>
  </TouchableOpacity>
);
