import React from "react";

export default async function BackgroundCircles() {
  return (
    <div className={"fixed bottom-0 left-0 right-0 top-0 -z-50"}>
      <svg width={"100%"} height={"100%"}>
        <g filter={"url(#blur)"}>
          <circle
            cx={"95%"}
            cy={"10%"}
            r={"40%"}
            fill={"#430044"}
            fillOpacity={"0.60"}
          />
          <circle
            cx={"5%"}
            cy={"80%"}
            r={"40%"}
            fill={"#3A0044"}
            fillOpacity={"0.60"}
          />
        </g>

        <filter id={"blur"}>
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="235.5" />
        </filter>
      </svg>
    </div>
  );
}
