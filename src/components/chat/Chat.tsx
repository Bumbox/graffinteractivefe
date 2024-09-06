import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import ChatWindow from "./ChatWindow";
import MessageInput from "../chat/MessageInput";
import { chatHistory } from "../../assets/MassageHistory";

type ChatProps = {
  role: "client" | "manager";
  chatId: number;
  onNewMessage: (message: {
    sender: string;
    message: string;
    userName: string;
  }) => void;
};

type Message = {
  sender: string;
  message: string;
  userName: string;
};

type newMessage = {
  sender: string;
  message: string;
};

const socket: Socket = io("http://localhost:3000", {
  auth: { role: "client" },
});

const Chat: React.FC<ChatProps> = ({ role, onNewMessage, chatId }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.auth = { role };
    socket.connect();

    socket.on("message", (data: Message) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      onNewMessage(data);
    });

    return () => {
      socket.off("message");
      socket.disconnect();
    };
  }, [role]);

  const sendMessage = (message: string) => {
    const newMessage: newMessage = {
      sender: role,
      message,
    };
    socket.emit("message", newMessage);
  };

  return (
    <div className="flex flex-col w-full">
      <ChatWindow messages={chatId === 0 ? messages : chatHistory} />
      <MessageInput onSendMessage={sendMessage} chatId={chatId}/>
    </div>
  );
};

export default Chat;
