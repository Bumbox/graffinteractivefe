import React from "react";

const MyIcon: React.FC = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <g filter="url(#filter0_b_13371_1176)">
        <rect
          width="40"
          height="40"
          rx="20"
          fill="white"
          className="group-hover:fill-hovered-button group-active:fill-pressed-button transition-colors duration-300"
        />
        <path
          d="M25 20L15 20M25 20L19.697 15M25 20L19.697 25"
          stroke="#14161F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_13371_1176"
          x="-4"
          y="-4"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_13371_1176"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_13371_1176"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MyIcon;
