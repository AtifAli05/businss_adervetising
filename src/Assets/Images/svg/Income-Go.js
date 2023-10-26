import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const IncomeGo = (props) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={10} height={10} rx={5} fill="#21C26C" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.85728 4.2481L6.24277 4.13774L6.34296 6.52368"
      fill="#21C26C"
    />
    <Path
      d="M3.85728 4.2481L6.24277 4.13774L6.34296 6.52368"
      stroke="white"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.24273 4.13794L3.76193 6.84779L6.24273 4.13794Z"
      fill="#21C26C"
    />
    <Path
      d="M6.24273 4.13794L3.76193 6.84779"
      stroke="white"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IncomeGo;
