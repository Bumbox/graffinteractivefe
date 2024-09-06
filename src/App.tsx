import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerPage from "./components/pages/ManagerPage";
import UserPage from "./components/pages/UserPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
