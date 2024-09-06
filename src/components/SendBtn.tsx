import React from "react";
import SendBtnIco from "../assets/SendBtnIco";

type ButtonProps = {
  onClick: () => void;
  active: boolean;
};

const SendBtn: React.FC<ButtonProps> = ({ onClick, active }) => {
  return (
    <div onClick={onClick} className=" group flex items-center mr-[17px]">
      <SendBtnIco fill={active ? "#798FFF" : "#A3A7BF"} />
    </div>
  );
};

export default SendBtn;
