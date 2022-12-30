import { Dimensions } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

const { height: deviceHeight } = Dimensions.get("window");

export const RFValue = (value: number): number => RF(value, deviceHeight);
