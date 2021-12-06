import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRout from "./pages/PrivateRout";
 
function App() {
  return (
    <div id="wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route   path="/signUp" element={<SignUp />} />
          <Route   path="/desktop" element={<PrivateRout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
