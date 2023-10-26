import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const GraphTiktok = (props) => (
  <Svg
    width={77}
    height={44}
    viewBox="0 0 77 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 43C19.1529 -1.94182 20.1083 41.1077 41.6051 9.41185C58.8025 -15.9448 73.4522 24.8656 76 16.9811"
      stroke="#FFB327"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={36} cy={16} r={3.5} fill="white" stroke="#FFB327" />
  </Svg>
);
export default GraphTiktok;
