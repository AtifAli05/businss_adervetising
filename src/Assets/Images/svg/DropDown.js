import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DropDown = (props) => (
  <Svg
    width={9}
    height={6}
    viewBox="0 0 9 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 1L4.471 4.486L7.942 1"
      stroke="#8E97AE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DropDown;
