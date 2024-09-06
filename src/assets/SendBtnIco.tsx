import React from "react";

type SendBtnIcoProps = {
  fill: string;
};

const SendBtnIco: React.FC<SendBtnIcoProps> = ({ fill }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9486 6.31622C19.0739 5.94034 18.9655 5.52594 18.6721 5.25961C18.3788 4.99328 17.9559 4.92526 17.5938 5.08618L4.92082 10.7186C3.61718 11.298 3.78221 13.1986 5.16622 13.5446L7.2927 14.0762C7.9053 14.2293 8.55425 14.0842 9.04323 13.6846L14.4913 9.23311C14.6777 9.08081 14.9248 9.32695 14.7732 9.51393L10.7598 14.4648C10.2656 15.0744 10.1736 15.9167 10.5246 16.6187L11.899 19.3675C12.4967 20.5628 14.2411 20.4388 14.6637 19.1711L18.9486 6.31622Z"
        fill={fill}
        // className="group-active:fill-black"
      />
    </svg>
  );
};

export default SendBtnIco;
