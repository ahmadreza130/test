import React, { useContext } from "react";
import Post from "../components/desktop/Post";
import SendPost from "../components/desktop/SendPost";
import { SetUserContext, UserContext } from "../Store";
import image from "../assets/test.jpg";
import More from "../components/desktop/More";
import { BsPlusSquare } from "react-icons/bs";
const Desktop = () => {
  const setUser = useContext(SetUserContext);
  const user = useContext(UserContext);
  const logOut = () => {
    setUser({ ...user, loggedIn: false });
  };
  return (
    <div>
      <div>
        <div id="logoutdiv">
          <div>
            <img src={image} alt="none" />
            <p>{user.email}</p>
            <p>designer</p>
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
      </div>

      <SendPost />
      <div id="posts">
        {user.posts
          ? user.posts.map((p) => <Post key={p.text} post={p} />)
          : false}
      </div>

      <More />
      <div id="hashtag">
        <div className="d-flex">
          <button>
            <BsPlusSquare className=" w-100" />
          </button>
          <p> هشتگ هایی که دنبال میکنید</p>
        </div>
        <hr />
        <div className="d-flex hash">
          <p>#work</p>
          <p>#hr</p>
          <p>#business</p>
        </div>
        <div className="d-flex hash">
          <p>#userinterface</p>

          <p>#digital</p>
        </div>
        <div className="d-flex hash">
          <p>#ux</p>
          <p>#freelace</p>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
