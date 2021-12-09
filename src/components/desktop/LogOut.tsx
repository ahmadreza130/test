import React, { useContext } from "react";
import { UserContext, SetUserContext } from "../../Store";
import image from "../../assets/test.jpg";

const LogOut = () => {
  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);
  const logOut = () => {
    setUser({ ...user, loggedIn: false });
  };
  return (
    <div className="col-lg-3 ">
      <div id="logoutdiv">
        <div>
          <img src={image} alt="none" />
          <p>{user.email}</p>
          <p>designer</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
