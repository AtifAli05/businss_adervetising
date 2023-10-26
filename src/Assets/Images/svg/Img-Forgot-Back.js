import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ImgBack = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
      stroke="#7B67ED"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.386 15.8832L9.51404 12.0002L13.386 8.11725"
      stroke="#7B67ED"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ImgBack;
