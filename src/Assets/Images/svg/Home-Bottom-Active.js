import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const HomeBottomActive = (props) => (
  <Svg
    width={22}
    height={32}
    viewBox="0 0 22 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.02 1.82258L2.63 6.02258C1.73 6.72258 1 8.21258 1 9.34258V16.7526C1 19.0726 2.89 20.9726 5.21 20.9726H16.79C19.11 20.9726 21 19.0726 21 16.7626V9.48258C21 8.27258 20.19 6.72258 19.2 6.03258L13.02 1.70258C11.62 0.722584 9.37 0.772584 8.02 1.82258Z"
      fill="#7B67ED"
      stroke="#7B67ED"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 16.9727V13.9727"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={11} cy={30.5} r={1.5} fill="#7B67ED" />
  </Svg>
);
export default HomeBottomActive;
