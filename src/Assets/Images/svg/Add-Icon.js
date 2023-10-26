import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AddIcon = (props) => (
  <Svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_76_41)">
      <Circle cx={35} cy={31} r={20} fill="#7B67ED" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.1261 24.75C35.1261 24.3358 34.7903 24 34.3761 24C33.9619 24 33.6261 24.3358 33.6261 24.75V30.62H27.75C27.3358 30.62 27 30.9558 27 31.37C27 31.7842 27.3358 32.12 27.75 32.12H33.6261V37.9897C33.6261 38.404 33.9619 38.7397 34.3761 38.7397C34.7903 38.7397 35.1261 38.404 35.1261 37.9897V32.12H41.0024C41.4166 32.12 41.7524 31.7842 41.7524 31.37C41.7524 30.9558 41.4166 30.62 41.0024 30.62H35.1261V24.75Z"
      fill="white"
    />
    <Defs></Defs>
  </Svg>
);
export default AddIcon;
