import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../Store";

const PrivateRout = () => {
  const { loggedIn } = useContext(UserContext);
  return <Route />;
};

export default PrivateRout;
