import React from "react";
import Message from "./Message";

type ChatWindowProps = {
  messages: { sender: string; message: string }[];
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="mb-4">
      {messages.map((msg, index) => (
        <Message
          message={msg.message}
          sender={msg.sender}
          key={index}
          previousSender={index > 0 ? messages[index - 1].sender : ""}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
