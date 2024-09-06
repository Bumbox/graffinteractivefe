import React, { useState } from "react";
import SendBtn from "../SendBtn";

type MessageInputProps = {
  onSendMessage: (message: string) => void;
  chatId: number;
};

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  chatId,
}) => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex bg-white group justify-between">
      <input
        type="text"
        value={message}
        placeholder={chatId==0 ? "Написать сообщение..." : "Пример"}
        className="h-12 w-full ml-4 focus:outline-none"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={chatId !== 0}
      />
      <SendBtn onClick={handleSendMessage} active={message.length > 0} />
    </div>
  );
};

export default MessageInput;
