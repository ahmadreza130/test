import React, { useContext, useState } from "react";
import { UserContext, SetUserContext } from "../../Store";

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
      posts.push(post)
      setUser({ ...user, posts: posts });
    }
  };
  return (
    <div>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, text: e.target.value })
        }
        type="text"
        placeholder="...چیزی بنویس"
      />
      <div>
        <input
          onChange={(e) => {
            setPost({ ...post, pic: URL.createObjectURL(e.target.files[0]) });
          }}
          type="file"
        />
        <button onClick={send}>ارسال</button>
      </div>
    </div>
  );
};

export default SendPost;
