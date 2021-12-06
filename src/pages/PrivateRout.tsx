import React, { useContext } from "react";
import {Navigate } from "react-router-dom";
import { UserContext } from "../Store";
import Desktop from "./Desktop";

const PrivateRout = () => {
  const { loggedIn } = useContext(UserContext);
  if(!loggedIn){
    return <Navigate to="/" />;
  }
  return<Desktop/>
};

export default PrivateRout;
