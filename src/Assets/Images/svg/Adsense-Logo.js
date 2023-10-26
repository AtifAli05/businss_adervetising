import * as React from "react";
import Svg, {
  Mask,
  Circle,
  G,
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const AdsenseLogo = (props) => (
  <Svg
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Mask
      id="mask0_60_915"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={23}
      height={23}
    >
      <Circle cx={11.5} cy={11.5} r={11.5} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_60_915)">
      <G
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <Rect x={4} y={5} width={15} height={13.7234} fill="url(#pattern0)" />
      </G>
    </G>
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_60_915"
          transform="scale(0.00425532 0.00465116)"
        />
      </Pattern>
      <Image
        id="image0_60_915"
        width={235}
        height={215}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default AdsenseLogo;
