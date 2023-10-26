import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";
const SplashImg = (props) => (
  <Svg
    width={34}
    height={7}
    viewBox="0 0 34 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={3.5} cy={3.5} r={3.5} fill="#7B67ED" />
    <Rect x={12} width={22} height={7} rx={3.5} fill="#D9D9D9" />
  </Svg>
);
export default SplashImg;
