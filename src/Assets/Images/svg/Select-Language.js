import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SelectLanguage = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.799805 7.99946L5.59416 12.7995L15.1998 3.19946"
      stroke="#28043D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SelectLanguage;
