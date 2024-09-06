import React from "react";
import TailIcon from "../../assets/TailIco";

type ButtonProps = {
  sender: string;
  message: string;
  previousSender: string;
};

const Message: React.FC<ButtonProps> = ({
  sender,
  message,
  previousSender,
}) => {
  const marginClass = sender === previousSender ? "mt-1" : "mt-4";

  return (
    <div className={`flex ${marginClass} mx-4 items-end`}>
      <div className="flex items-end">
        <div
          className={`rounded-full mr-[-4px] w-6 h-6 flex items-center justify-center ${
            sender === "manager" ? "bg-suppMsgBg" : "bg-userMsgBg"
          }`}
        >
          <p className="text-[10px] font-semibold">ИФ</p>
        </div>
      </div>
      <div>
        <TailIcon fill={sender === "manager" ? "#B9D7FB" : "#E2EAF1"} />
      </div>
      <div
        className={`rounded-lg rounded-bl-none p-3 py-2 max-w-[301px] w-full ${
          sender === "manager" ? "bg-suppMsgBg" : "bg-userMsgBg"
        }`}
      >
        <p className="text-[14px] font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Message;
