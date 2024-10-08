import React from "react";

type TailIcoProps = {
    fill: string;
  };

const TailIcon: React.FC<TailIcoProps> = ({fill}) => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
    >
      <path
        d="M7 0V12H0.25C0.111929 12 0 11.8881 0 11.75C0 11.6119 0.110043 11.4995 0.243852 11.4655C2.01768 11.0143 7 6.18654 7 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default TailIcon;
