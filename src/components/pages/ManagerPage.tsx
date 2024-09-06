import Header from "../layout/Header";
import ChatBox from "../chat/ChatBox";

const ManagerPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-inter">
      <Header page="support" />
      <div className="flex flex-grow ">
        <ChatBox />
      </div>
    </div>
  );
};

export default ManagerPage;
