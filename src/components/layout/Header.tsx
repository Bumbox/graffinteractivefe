import React from "react";

type HeaderProps = {
  page: string;
};

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <div className="h-16 flex border-b-2 border-gray-100">
      <div className="font-semibold text-2xl font-style: Inter flex items-center ml-10">
        graff.{page}
      </div>
    </div>
  );
};

export default Header;
