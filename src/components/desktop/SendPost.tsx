import React, { useContext, useState } from "react";
import { UserContext, SetUserContext } from "../../Store";
import { AiFillPicture } from "react-icons/ai";
export interface PostType {
  sender: string;
  text?: string;
  pic?: string;
}

const SendPost = () => {
  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);
  const [post, setPost] = useState<PostType>({ sender: user.email });

  const send = () => {
    if (post.pic || post.text) {
      const posts = user.posts;
      setUser({ ...user, posts: [...posts, post] });
    }
  };
  return (
    <div className="col-lg-6 ">
      <div id="sendPostDiv">
        <div id="head">
          <h6>{user.email}</h6>
          <br />
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPost({ ...post, text: e.target.value })
            }
            type="text"
            placeholder="&#9997; چیزی بنویس ..."
          />
        </div>

        <div id="butDiv">
        <button onClick={send}>ارسال</button>

          <label id="fileInput">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPost({
                  ...post,
                  pic: URL.createObjectURL(e.target.files[0]),
                });
              }}
              type="file"
            />
            <AiFillPicture /> photo
          </label>
        </div>
      </div>
    </div>
  );
};

export default SendPost;
