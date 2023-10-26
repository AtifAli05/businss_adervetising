import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const GraphFb = (props) => (
  <Svg
    width={76}
    height={35}
    viewBox="0 0 76 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 33.9526C4.11327 34.4302 13.0699 31.4965 23.9903 15.9413C37.6408 -3.50285 36.9223 38.6602 53.0874 24.9469C66.0194 13.9764 73.0841 4.41124 75 1"
      stroke="#056FF7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={60} cy={18} r={3.5} fill="white" stroke="#056FF7" />
  </Svg>
);
export default GraphFb;
