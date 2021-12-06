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
    <div>
      <div id="sendPostDiv">
        <h6>{user.email}</h6>

        <br />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPost({ ...post, text: e.target.value })
          }
          type="text"
          placeholder="&#9997; چیزی بنویس ..."
        />
        <div id="butDiv">
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

          <button onClick={send}>ارسال</button>
        </div>
      </div>
    </div>
  );
};

export default SendPost;
