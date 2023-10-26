import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const GraphAds = (props) => (
  <Svg
    width={77}
    height={43}
    viewBox="0 0 77 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 41.9166C4.17073 42.7578 13.2927 37.5904 24.4146 10.1915C38.3171 -24.0571 37.5854 50.2083 54.0488 26.0541C67.2195 6.73063 74.0488 16.2001 76 10.1915"
      stroke="#45C4A0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={57} cy={22} r={3.5} fill="white" stroke="#45C4A0" />
  </Svg>
);
export default GraphAds;
