import React from "react";

type ChatUserBoxProps = {
  selected: boolean;
  onclick: () => void;
  chatData: { sender: string; message: string; userName: string }[];
};

const ChatUserBox: React.FC<ChatUserBoxProps> = ({
  selected,
  onclick,
  chatData,
}) => {
  const lastMessage = chatData[chatData.length - 1];
  const getInitials = (fullName: string) => {
    const words = fullName.split(' ');
    const initials = words.map(word => word[0].toUpperCase()).join('');
    return initials;
  };
  
  const name = "Иван Федоров";
  const initials = getInitials(name);
  return (
    <div
      className={`flex w-full h-16 cursor-pointer ${
        selected ? "bg-suppMsgBg" : "hover:bg-chatHovered"
      } `}
      onClick={onclick}
    >
      <div className="NameBox flex items-center">
        <div className="flex bg-chatCircle h-10 w-10 rounded-full ml-3 mr-2 items-center justify-center">
          <p className="text-sm font-semibold">{lastMessage ? initials : "НО"}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full mr-2 overflow-hidden">
        <p className="font-semibold text-sm ">{lastMessage ? lastMessage.userName: "Нет обращений"}</p>
        <p className="text-sm truncate text-chatMsgPrev">
          {lastMessage ? lastMessage.message : "Нет сообщений"}
        </p>
      </div>
    </div>
  );
};

export default ChatUserBox;
