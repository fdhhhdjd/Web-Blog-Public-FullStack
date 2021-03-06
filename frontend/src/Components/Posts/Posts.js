import React from "react";
import { useSelector } from "react-redux";
import { Post, MetaData } from "../../Imports/Index";
import { PostStyle } from "../../Styles/Posts/PostStyle";
const Posts = () => {
  const { allPost } = useSelector((state) => state.post);
  return (
    <>
      <MetaData title="Blog-Forme-Dev" />
      <PostStyle />
      <div className="posts">
        {allPost.slice(0, 6).map((item) => {
          return <Post post={item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default Posts;
