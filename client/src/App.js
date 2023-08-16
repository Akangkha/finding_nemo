import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./Components/FoundCard";
import FoundPage from "./pages/FoundPage";
import LostPage from "./pages/LostPage";
import HomePage from "./pages/HomePage";
import ClaimedItems from "./pages/ClaimedItems";
import "./App.css";
function App() {
  return (
    <div className="screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="items" element={<LostPage />} />
          <Route path="claimed" element={<ClaimedItems />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
