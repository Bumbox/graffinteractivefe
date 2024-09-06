import React from "react";
import NextBtnIco from "../../assets/NextBtnIco"; // Импортируем SVG как React-компонент

type ButtonProps = {
  onClick: () => void;
};

const NextButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className=" group ">
      <NextBtnIco />
    </div>
  );
};

export default NextButton;
