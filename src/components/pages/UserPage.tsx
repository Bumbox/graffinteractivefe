import React from "react";
import Slider from "../slider/Slider";
import Header from "../layout/Header";
import SupportChat from "../chat/SupportChat";

const UserPage: React.FC = () => {
  return (
    <div className="font-inter">
      <Header page="test" />
      <div className="">
        <div className="flex flex-row">
          <div className="max-w-[75vw] mt-6">
            <Slider serverUrl="http://localhost:3000/" />
          </div>
          <SupportChat />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
