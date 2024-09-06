import React from "react";
import PrevBtnIco from "../../assets/PrevBtnIco"; // Импортируем SVG как React-компонент

type ButtonProps = {
  onClick: () => void;
};

const PrevButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className=" group ">
      <PrevBtnIco />
    </div>
  );
};

export default PrevButton;
