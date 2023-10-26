import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
const SearchLogo = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.0449 15.044L19.3348 19.3338"
      stroke="#7B67ED"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse
      cx={9.03182}
      cy={9.03703}
      rx={8.36458}
      ry={8.3698}
      stroke="#7B67ED"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchLogo;
