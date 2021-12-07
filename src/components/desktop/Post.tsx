import React from "react";
import { PostType } from "./SendPost";
interface Props {
  post: PostType;
}
const Post: React.FC<Props> = ({ post }) => {
  const { sender, text, pic } = post;
  return (
    <div id="pstDiv">
      <div >
        <p>{sender}</p>
        <p>{text ? text : false}</p>
        {pic ? <img  src={pic} alt="none" /> : false}
      </div>
    </div>
  );
};

export default Post;
