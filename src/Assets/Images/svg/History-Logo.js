import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HistoryLogo = (props) => (
  <Svg
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.3 58H37.7C52.2 58 58 52.2 58 37.7V20.3C58 5.8 52.2 0 37.7 0H20.3C5.8 0 0 5.8 0 20.3V37.7C0 52.2 5.8 58 20.3 58Z"
      fill="#8E97AE"
    />
    <Path
      d="M15.4573 36.2211L22.3593 27.2601C23.3453 25.9841 25.1723 25.7521 26.4483 26.7381L31.7553 30.9141C33.0313 31.9001 34.8583 31.6681 35.8443 30.4211L42.5433 21.7791"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HistoryLogo;
