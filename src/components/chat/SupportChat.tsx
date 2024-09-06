import React from "react";
import Chat from "./Chat";

const SupportChat: React.FC = () => {
  const onNewMessage = () => {};
  return (
    <>
      <div className="flex flex-col max-w-[calc(100vw-1px)] h-[93vh] w-[360px] border-l-2 border-gray-100 ml-auto bg-chat-bg">
        <div className="h-14 w-full bg-white flex items-center">
          <p className="font-semibold text-xl ml-4">Чат с поддержкой</p>
        </div>
        <div className="mt-auto">
          <Chat role="client" onNewMessage={onNewMessage} chatId={0} />
        </div>
      </div>
    </>
  );
};

export default SupportChat;
