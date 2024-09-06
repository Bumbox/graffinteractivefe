import React, { useState } from "react";
import ChatUserBox from "./ChatUserBox";
import Chat from "./Chat";
import { chats } from "../../assets/MassageHistory";

const ChatBox: React.FC = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState<number | null>(0);
  const [chatData, setChatData] = useState<
    { sender: string; message: string; userName: string }[]
  >([]);

  const handleNewMessage = (newMessage: {
    sender: string;
    message: string;
    userName: string;
  }) => {
    setChatData((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSelectChat = (index: number) => {
    setSelectedChatIndex(index);
  };

  return (
    <div className="flex flex-grow ">
      <div className="flex flex-col w-[360px] border-r-[1px] border-chatHovered">
        <ChatUserBox
          selected={selectedChatIndex === 0}
          onclick={() => handleSelectChat(0)}
          chatData={chatData}
        />
        {chats.map((chatData, index) => (
          <ChatUserBox
            key={index}
            chatData={chatData}
            onclick={() => handleSelectChat(index + 1)}
            selected={selectedChatIndex === index + 1}
          />
        ))}
      </div>
      <div className="flex items-end flex-grow bg-chat-bg">
        <Chat
          role="manager"
          onNewMessage={handleNewMessage}
          chatId={selectedChatIndex || 0}
        />
      </div>
    </div>
  );
};

export default ChatBox;
