import { Dimensions } from "react-native";

const fullHeight = Dimensions.get("window").height;
const fullWidth = Dimensions.get("window").width;

const widthRef = fullWidth / 375;
const heightRef = fullHeight / 820;

const fontRef = fullHeight / 820;

export { fullHeight, fullWidth, widthRef, heightRef, fontRef };
