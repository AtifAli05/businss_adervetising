import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CurrencyGo = (props) => (
  <Svg
    width={6}
    height={9}
    viewBox="0 0 6 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.5}
      d="M1.72803 8L5.21403 4.529L1.72803 1.058"
      stroke="#8E97AE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CurrencyGo;
