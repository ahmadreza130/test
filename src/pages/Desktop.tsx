import React, { useContext } from "react";
import Post from "../components/desktop/Post";
import SendPost from "../components/desktop/SendPost";
import { SetUserContext, UserContext } from "../Store";

const Desktop = () => {
  const setUser = useContext(SetUserContext);
  const user = useContext(UserContext);
  const logOut = () => {
    setUser({ ...user, loggedIn: false });
  };
  return (
    <div>
      <div id="logoutdiv">
        <p>{user.email}</p>
        <button onClick={logOut}>Log Out</button>
      </div>
      <SendPost />
      {user.posts
        ? user.posts.map((p) => <Post key={p.text} post={p} />)
        : false}
    </div>
  );
};

export default Desktop;
