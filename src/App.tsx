import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Desktop from "./pages/Desktop";
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route   path="/signUp" element={<SignUp />} />
          <Route   path="/desktop" element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
