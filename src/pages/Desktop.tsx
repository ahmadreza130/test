import React, { useContext } from "react";
import Post from "../components/desktop/Post";
import SendPost from "../components/desktop/SendPost";
import { SetUserContext, UserContext } from "../Store";
import More from "../components/desktop/More";
import LogOut from "../components/desktop/LogOut";
import HashTag from "../components/desktop/HashTag";
const Desktop = () => {
  const setUser = useContext(SetUserContext);
  const user = useContext(UserContext);

  return (
    <div>
      <div id="firstRow" className="  row">
        <HashTag />
        <SendPost />
        <LogOut />
      </div>
      <div id="secondRow" className="row">
        <div className="col-lg-6" id="posts">
          {user.posts
            ? user.posts.map((p) => <Post key={p.text} post={p} />)
            : false}
        </div>
        <More/>
      </div>
    </div>
  );
};

export default Desktop;
